// src/components/Marquee.js
import React from "react";
import "./Marquee.css"; // Ensure this imports the CSS

const Marquee = () => {
  return (
    <div className="marquee-container">
      <div className="marquee" style={{ margin: "10px" }}>
        {" "}
        <img
          src="/img/superblink.gif"
          style={{ width: "20px", verticalAlign: "middle" }}
        ></img>
        welcome to Golden Matka
        <img
          src="/img/superblink.gif"
          style={{ width: "20px", verticalAlign: "middle" }}
        ></img>
      </div>
    </div>
  );
};

export default Marquee;
