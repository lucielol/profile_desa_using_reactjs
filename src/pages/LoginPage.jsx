import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { check, LoginUser, reset } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { Spinner, Button } from "flowbite-react";
import getToken from "../GetToken";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { token, user, loading, isSuccess, isError, message, isMe } =
    useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      LoginUser({
        email,
        password,
      })
    );
  };

  useEffect(() => {
    if (getToken) {
      dispatch(check(getToken));
    }
  }, [dispatch, user, isSuccess, navigate]);

  useEffect(() => {
    console.log("Token", token);
    if (isSuccess && user && token) {
      navigate("/dashboard");
    }

    if (isError) {
      setErrorLogin(true);
      setTimeout(() => {
        dispatch(reset());
      }, 2000);
    }

    dispatch(reset());
  }, [user, isSuccess, token, isError, message, dispatch, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full space-y-8 bg-white shadow-md p-6 rounded-lg">
        <div>
          <h2 className="my-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>
          <div>
            <Button type="submit" color="blue" disabled={loading}>
              {loading ? (
                <div className="flex">
                  <Spinner aria-label="Spinner button example" size="sm" />
                  <span className="pl-3">Loading...</span>
                </div>
              ) : (
                "Sign in"
              )}
            </Button>
          </div>
          {errorLogin && (
            <div className="text-red-500 text-sm mt-2">{message}</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
