import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css"; // Import the CSS file

const Sidebar = ({ onSidebarClick }) => {
  return (
    <aside id="sidebar" className="open" style={{ left: "0px" }}>
      {/* Logo starts */}
      <a href="/Home" className="logo">
        <img src="./img/logo.png" alt="logo" />
      </a>
      <div style={{ textAlign: "center" }}>
        <a href="/LoginPage" className="btn btn-danger">
          Logout <i className="fa fa-sign-out" style={{ fontSize: "15px" }}></i>
        </a>
      </div>

      {/* Menu start */}
      <div id="menu">
        <ul>
          <li className="highlight">
            <Link to="dashboard" onClick={() => onSidebarClick("Dashboard")}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="draw" onClick={() => onSidebarClick("DrawMaster")}>
              Draw Master
            </Link>
          </li>
          <li title="Open Status">
            <Link to="open" onClick={() => onSidebarClick("Open")}>
              Open Status
            </Link>
          </li>
          <li title="Client Details">
            <Link to="/client" onClick={() => onSidebarClick("Client")}>
              Client Master
            </Link>
          </li>
          <li title="Agent Details">
            <Link to="/agent" onClick={() => onSidebarClick("Agent")}>
              Agents Master
            </Link>
          </li>
        </ul>
      </div>
      {/* Menu End */}
    </aside>
  );
};

export default Sidebar;
