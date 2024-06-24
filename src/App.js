import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { NewsPage } from "./pages/NewsPage";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
import { HeaderEdit } from "./pages/Dashboard/HeaderEdit";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news/:id" element={<NewsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/header/edit"
          element={
            <PrivateRoute>
              <HeaderEdit />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
