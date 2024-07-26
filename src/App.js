import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Logout from "./pages/Logout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./PrivateRoute";
import { NewsPage } from "./pages/NewsPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import { Gallery } from "./pages/Dashboard/Gallery";
import News from "./pages/Dashboard/News";
import Progress from "./pages/Dashboard/Progress";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news/:uuid" element={<NewsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/logout"
          element={
            <PrivateRoute>
              <Logout />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/gallery"
          element={
            <PrivateRoute>
              <Gallery />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/news"
          element={
            <PrivateRoute>
              <News />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/Progress"
          element={
            <PrivateRoute>
              <Progress />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
