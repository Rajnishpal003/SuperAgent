import React from "react";
import "./Header.css";

const Header = ({ onToggleSidebar }) => {
  return (
    <header>
      <ul className="pull-left" id="left-nav">
        <li className="hidden-lg hidden-md hidden-sm">
          <div className="logo-mob clearfix">
            <h2>Limit : 37095</h2>
          </div>
        </li>
        <li></li>
      </ul>
      <div className="pull-right">
        <ul id="mini-nav" className="clearfix">
          <li className="list-box hidden-xs dropdown">
            <a
              id="drop1"
              href="/"
              role="button"
              className="dropdown-toggle current-user"
              data-toggle="dropdown"
            >
              Sa485 Ganesh Sahu Begam Limit : 37095
            </a>
          </li>
          <li className="list-box">
            <a href="/LoginPage" className="atag">
              <i className="fa fa-sign-out" style={{ fontSize: "30px" }}></i>
            </a>
          </li>
          {/* <li className="list-box hidden-lg hidden-md hidden-sm" id="mob-nav"> */}
          {/* <a href="#" onClick={onToggleSidebar}> */}
          {/* <i className="fa fa-reorder"></i> */}
          {/* </a> */}
          {/* </li> */}
        </ul>
      </div>
    </header>
  );
};

export default Header;
