import React from "react";
import "./App.css";
const Client = () => {
  return (
    <div>
      <div
        className="uk-width-medium-1-12"
        style={{ textAlign: "right", paddingTop: "20px" }}
      >
        <a href="#" className="btn btn-danger">
          Add New Client
        </a>{" "}
        <br />
      </div>
      <table className="table table-condensed table-striped table-bordered table-hover no-margin">
        <thead style={{ background: "cadetblue", color: "#fff" }}>
          <tr>
            <th className="uk-text-nowrap ">S.N</th>
            <th className="uk-width-2-10">Action</th>
            <th className="uk-text-nowrap">Code[Password]</th>
            <th className="uk-text-nowrap">Name</th>
            <th className="uk-text-nowrap">Mob</th>
            <th className="uk-text-nowrap">D.O.J</th>
            <th className="uk-text-nowrap">D.O.J</th>
            <th className="uk-text-nowrap">Client Comm</th>
            <th className="uk-text-nowrap">Super Agent Comm</th>
            <th className="uk-text-nowrap">Share</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};
export default Client;
