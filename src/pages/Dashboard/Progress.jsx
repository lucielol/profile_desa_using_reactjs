import React, { useEffect, useState } from "react";
import App from "../Templates/App";
import axios from "axios";
import Navbar from "../Templates/Navbar";

const Progress = () => {
  return (
    <div>
      <App>
        <Navbar>Manage Progress</Navbar>
      </App>
    </div>
  );
};

export default Progress;
