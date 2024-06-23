import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import CryptoJS from "crypto-js";
import axios from "axios";

// Kunci enkripsi (sesuaikan dengan kunci Anda)
const secretKey = "your-secret-key";

// Thunk untuk login
export const LoginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      await axios.get("/sanctum/csrf-cookie", {
        withCredentials: true,
      });

      const response = await axios.post(
        "/api/login",
        { email, password },
        {
          headers: {
            Accept: "application/json",
            "X-XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
          },
          withCredentials: true,
        }
      );

      if (response.status !== 200) {
        if (response.status === 419) {
          Cookies.remove("access_token");
        }
        return rejectWithValue(response.data.message || "Login failed");
      }

      const data = response.data;

      // Enkripsi token sebelum menyimpan ke cookie
      const encryptedToken = CryptoJS.AES.encrypt(
        data.access_token,
        secretKey
      ).toString();
      Cookies.set("access_token", encryptedToken, {
        expires: 7,
        secure: true,
      });

      return data;
    } catch (error) {
      console.error("Error during login process:", error);
      return rejectWithValue("An error occurred. Please try again.");
    }
  }
);

// Slice untuk autentikasi
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: Cookies.get("access_token") || null,
    loading: false,
    isSuccess: false,
    isError: false,
    message: null,
    isMe: false, // Tambahkan isMe di initialState
  },
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = null;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      Cookies.remove("access_token");
      state.isMe = false; // Reset isMe saat logout
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(LoginUser.pending, (state) => {
        state.loading = true;
        state.isError = false;
        state.message = null;
      })
      .addCase(LoginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.access_token;
        state.user = action.payload.user || { email: action.meta.arg.email };
        state.isSuccess = true;
        state.isMe = true; // Set isMe to true upon successful login
      })
      .addCase(LoginUser.rejected, (state, action) => {
        state.loading = false;
        state.isError = true;
        state.message = action.payload || "Login failed";
        state.isMe = false; // Reset isMe upon login failure
        if (action.payload && action.payload.status === 419) {
          // Handle 419 status
          Cookies.remove("access_token");
          // Atau lakukan aksi lain yang sesuai seperti menavigasi ke halaman login
        }
      });
  },
});

export const { reset, logout } = authSlice.actions;

export default authSlice.reducer;
