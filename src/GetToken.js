import CryptoJS from "crypto-js";
import Cookies from "js-cookie";

const secretKey = "l630bfaYZQeSXGWMAYKSvaTSD0K7ngd2";
const encryptedToken = Cookies.get("access_token");

const getToken = () => {
  if (encryptedToken) {
    try {
      const bytes = CryptoJS.AES.decrypt(encryptedToken, secretKey);
      return bytes.toString(CryptoJS.enc.Utf8);
    } catch (error) {
      console.error("Error decrypting the token:", error);
      return null;
    }
  } else {
    return null;
  }
};

export default getToken;
