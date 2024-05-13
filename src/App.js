import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import { NewsPage } from "./pages/NewsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/news/:id" element={<NewsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
