import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home";
import DashBoard from "./DashBoard";
import Open from "./Open"; // Ensure the case matches your file names
import Client from "./Client";
import Agent from "./Agent";
import DrawMaster from "./Draw";
import LoginPage from "./LoginPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/draw" element={<DrawMaster />} />
        <Route path="/open" element={<Open />} />
        <Route path="/client" element={<Client />} />
        <Route path="/agent" element={<Agent />} />
        {/* <Route path="/LoginPage" element={<LoginPage />} /> */}
      </Route>
      <Route path="/loginpage" element={<LoginPage />} />
    </Routes>
  );
};

export default App;
