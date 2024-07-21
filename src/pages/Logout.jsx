import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/auth/authSlice";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Dispatch the logout action
    dispatch(logout());

    // Redirect to login page
    navigate("/login", { replace: true });

    // Reload the page
    window.location.reload();

    // Ensure this effect runs only once
  }, [dispatch, navigate]);

  return null;
};

export default Logout;
