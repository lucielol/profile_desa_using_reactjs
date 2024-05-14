import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import { NewsPage } from "./pages/NewsPage";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" exact element={<HomePage/>} />
        <Route path="/news/:id" element={<NewsPage/>} />
      </Routes>
    </HashRouter>
  );
};

export default App;
