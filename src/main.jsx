import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

import App from "./App.jsx";
import "./index.css";

import Header from "./Header.jsx";
import Dashboard from "./DashBoard.jsx";
import Home from "./Home.jsx";
import GameTable from "./Draw.jsx";

//import LoginPage from "/LoginPage.jsx";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
