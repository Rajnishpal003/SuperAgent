import React, { useState } from "react";
import "./App.css"; // Import your main CSS file (if necessary)

const AgentManagement = () => {
  const agents = [
    {
      id: 1,
      code: "A2200 [41472]",
      name: "Ganesh-Sahu",
      mobile: "9993197166",
      doj: "12-02-2024",
    },
    {
      id: 2,
      code: "A2233 [49239]",
      name: "Raju-Jain",
      mobile: "0101010101",
      doj: "29-02-2024",
    },
    {
      id: 3,
      code: "A2382 [33218]",
      name: "Rajesh Sahu",
      mobile: "0101010101",
      doj: "27-05-2024",
    },
  ];

  const [dropdownOpen, setDropdownOpen] = useState(null); // Track which dropdown is open

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index); // Toggle dropdown
  };

  const handleActive = (id) => {
    const base_url = "https://super.bombaymatka.in/";
    window.location.replace(`${base_url}SAG/UpdateActive/${id}`);
  };

  const handleDActive = (id) => {
    const base_url = "#";
    window.location.replace(`${base_url}SAG/UpdateDeActivem/${id}`);
  };

  return (
    <div id="page_content">
      <div id="page_content_inner">
        <div className="ag-card uk-margin-medium-bottom">
          <div className="md-card-content">
            <div className="uk-overflow-container">
              <div
                className="uk-width-medium-1-12"
                style={{ textAlign: "right" }}
              >
                <a href="#" className="btn btn-danger">
                  Add New Agent
                </a>
              </div>
              <table className="table table-condensed table-striped table-bordered table-hover no-margin">
                <thead style={{ background: "cadetblue", color: "#fff" }}>
                  <tr>
                    <th className="uk-width-1-10 uk-text-center">S.N.</th>
                    <th className="uk-width-2-10">Action</th>
                    <th className="uk-width-2-10">Code [Password]</th>
                    <th className="uk-width-2-10">Agent Name</th>
                    <th className="uk-width-2-10">Mobile</th>
                    <th className="uk-width-1-10">D.O.J.</th>
                    <th className="uk-width-2-10">Super Agent Comm.</th>
                    <th className="uk-width-2-10">Share</th>
                  </tr>
                </thead>
                <tbody>
                  {agents.map((agent, index) => (
                    <tr key={agent.id}>
                      <td className="uk-text-center">{index + 1}</td>
                      <td>
                        <div className="custom-dropdown">
                          <button
                            type="button"
                            style={{ padding: "4px 8px" }}
                            className="btn btn-xs btn-primary"
                            onClick={() => toggleDropdown(index)} // Toggle dropdown on button click
                          >
                            &nbsp;<span className="caret"></span>
                          </button>
                          {dropdownOpen === index && ( // Render dropdown based on state
                            <ul
                              className="dropdown-menu"
                              style={{
                                minWidth: "121px",
                                position: "absolute",
                                zIndex: 1,
                                backgroundColor: "white",
                                border: "1px solid #ccc",
                                listStyle: "none",
                                padding: "0",
                                margin: "0",
                              }}
                            >
                              <li>
                                <a
                                  href={`https://super.bombaymatka.in/SAG/SEND/${agent.id}`}
                                  title="SMS"
                                >
                                  <i
                                    className="fa fa-envelope-o"
                                    aria-hidden="true"
                                  ></i>{" "}
                                  SEND SMS
                                </a>
                              </li>
                              <li>
                                <a
                                  href={`https://super.bombaymatka.in/SAG/Edit/${agent.id}`}
                                  title="Edit"
                                >
                                  <i
                                    className="fa fa-pencil"
                                    aria-hidden="true"
                                  ></i>{" "}
                                  Edit
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  title="Login"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <i
                                    className="fa fa-sign-in"
                                    aria-hidden="true"
                                  ></i>{" "}
                                  Login
                                </a>
                              </li>
                              <li>
                                <a
                                  onClick={() => handleDActive(agent.id)}
                                  title="Inactive"
                                >
                                  <i
                                    className="fa fa-ban"
                                    aria-hidden="true"
                                  ></i>{" "}
                                  Inactive
                                </a>
                              </li>
                            </ul>
                          )}
                        </div>
                      </td>
                      <td>{agent.code}</td>
                      <td>{agent.name}</td>
                      <td>{agent.mobile}</td>
                      <td>{agent.doj}</td>
                      <td>0</td>
                      <td>0%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentManagement;
