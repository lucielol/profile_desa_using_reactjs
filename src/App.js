import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import { NewsPage } from "./pages/NewsPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage/>} />
        <Route path="/news/:id" element={<NewsPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
