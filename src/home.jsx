import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Import useNavigate and useLocation
import Header from "./Header";
import Marquee from "./Marquee";
import Sidebar from "./Sidebar";
import DashBoard from "./DashBoard";
import DrawMaster from "./Draw"; // Ensure these components are imported correctly
import Open from "./Open";
import Client from "./Client";
import Agent from "./Agent";
import "./App.css";
import LoginPage from "./LoginPage";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Function to determine the active component based on the URL
  const getActiveComponentFromPath = (path) => {
    console.log("Current Path:", path); // Debugging log
    switch (path) {
      case "/dashboard":
        return "Dashboard";
      case "/draw":
        return "DrawMaster";
      case "/open":
        return "Open";
      case "/client":
        return "Client";
      case "/agent":
        return "Agent";
      case "/loginpage":
        return "LoginPage";
      default:
        return "Dashboard";
    }
  };

  // Set the initial active component based on the current URL
  const [activeComponent, setActiveComponent] = useState(
    getActiveComponentFromPath(location.pathname)
  );

  useEffect(() => {
    setActiveComponent(getActiveComponentFromPath(location.pathname));
  }, [location.pathname]);

  // Function to handle sidebar click
  const handleSidebarClick = (component) => {
    console.log("Sidebar Clicked:", component); // Debugging log
    const path = `/${component.toLowerCase()}`;
    setActiveComponent(component);
    navigate(path); // Update the URL
  };

  // Function to render the active component
  const renderActiveComponent = () => {
    console.log("Rendering Component:", activeComponent); // Debugging log
    switch (activeComponent) {
      case "Dashboard":
        return <DashBoard />;
      case "DrawMaster":
        return <DrawMaster />;
      case "Open":
        return <Open />;
      case "Client":
        return <Client />;
      case "Agent":
        return <Agent />;
      case "LoginPage":
        return <LoginPage />;
      default:
        return <DashBoard />;
    }
  };

  return (
    <div className="mainr">
      <Sidebar onSidebarClick={handleSidebarClick} />{" "}
      {/* Pass the function to Sidebar */}
      <div className="mainy">
        <Header />
        <Marquee />
        
        <div>{renderActiveComponent()}</div>{" "}
        {/* Render the active component here */}
      </div>
    </div>
  );
};

export default Home;
