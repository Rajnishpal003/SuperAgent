import React from "react";
import "./open.css";
const Open = () => {
  return (
    <div className="container-fluid">
      <div className="panel-body">
        <table className="table table-condensed table-striped table-bordered table-hover no-margin">
          <tbody>
            <tr>
              <td>
                <input
                  type="date"
                  id="dp1"
                  defaultValue="2024-10-15"
                  name="date"
                  required
                  style={{
                    fontSize: "18px",
                    width: "149px",
                    border: "1px solid #000000",
                  }}
                />
              </td>
              <td>
                <span
                  style={{
                    color: "#000000",
                    fontSize: "18px",
                    fontFamily: "'Oswald', sans-serif",
                  }}
                >
                  SGL + JODI = TOTAL
                </span>
                <br />
                <span
                  className="countUpMe"
                  id="singleTotal"
                  style={{
                    color: "green",
                    fontSize: "18px",
                    fontFamily: "'Oswald', sans-serif",
                  }}
                >
                  <i className="fa fa-inr" aria-hidden="true"></i>0
                </span>
              </td>
              <td>
                <span
                  style={{
                    color: "#000000",
                    fontSize: "18px",
                    fontFamily: "'Oswald', sans-serif",
                  }}
                >
                  PATTI TOTAL
                </span>
                <br />
                <span
                  className="countUpMe"
                  id="pattiTotal"
                  style={{
                    color: "green",
                    fontSize: "18px",
                    fontFamily: "'Oswald', sans-serif",
                  }}
                >
                  <i className="fa fa-inr" aria-hidden="true"></i>0
                </span>
              </td>
              <td>
                <span
                  style={{
                    color: "#000000",
                    fontSize: "18px",
                    fontFamily: "'Oswald', sans-serif",
                  }}
                >
                  FINAL TOTAL
                </span>
                <br />
                <span
                  className="countUpMe"
                  id="Total"
                  style={{
                    color: "green",
                    fontSize: "18px",
                    fontFamily: "'Oswald', sans-serif",
                  }}
                >
                  <i className="fa fa-inr" aria-hidden="true"></i>0
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <select
                  name="game"
                  id="game"
                  style={{ fontFamily: "'Oswald'" }}
                >
                  <option value="">Draw</option>
                  <option value="7">Good Morning</option>
                  <option value="1">BOMBAY EXP</option>
                  <option value="2">GOLDEN</option>
                  <option value="3">KALAYAN</option>
                  <option value="4">GOLDSTAR</option>
                  <option value="5">GOLDEN NIGHT</option>
                  <option value="6">DESAWAR</option>
                </select>
                <span id="demo"></span>
              </td>
              <td>
                <select name="round" id="round">
                  <option value="">Round</option>
                  <option value="1">Open</option>
                  <option value="2">Close</option>
                </select>
                <button
                  id="show"
                  className="btn btn-info"
                  onClick={() => submit()}
                >
                  Status
                </button>
              </td>
              <td colSpan="2">
                <div
                  style={{
                    color: "#ff054b",
                    fontSize: "25px",
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: "900",
                    textAlign: "center",
                  }}
                  id="Final_Patti1"
                ></div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="row">
          <div className="col-lg-2" style={{ textAlign: "center" }}>
            <h6>BOMBAY EXP</h6>
          </div>
          <div className="col-lg-2" style={{ textAlign: "center" }}>
            <h6>GOLDEN</h6>
          </div>
          <div className="col-lg-2" style={{ textAlign: "center" }}>
            <h6>KALAYAN</h6>
          </div>
          <div className="col-lg-2" style={{ textAlign: "center" }}>
            <h6>GOLDSTAR</h6>
          </div>
          <div className="col-lg-2" style={{ textAlign: "center" }}>
            <h6>GOLDEN NIGHT</h6>
          </div>
          <div className="col-lg-2" style={{ textAlign: "center" }}>
            <h6>Total Profit/Loss</h6>
          </div>
        </div>
        <div className="row">
          {[
            "BOMBAY EXP",
            "GOLDEN",
            "KALAYAN",
            "GOLDSTAR",
            "GOLDEN NIGHT",
            "Total Profit/Loss",
          ].map((item, index) => (
            <div
              className="col-lg-2"
              style={{ textAlign: "center" }}
              key={index}
            >
              <input
                type="text"
                style={{
                  border: "3px solid #000000",
                  height: "32px",
                  fontSize: "20px",
                  textAlign: "center",
                  width: "140px",
                }}
                defaultValue="0.00"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="row no-gutter">
        <div className="col-md-4 col-sm-6 col-sx-12">
          <div className="panel panel-default">
            <div className="panel-body">
              <div className="single">
                <table className="table table-striped no-margin">
                  <tbody>
                    <tr style={{ background: "purple", color: "#ffffff" }}>
                      <td style={{ color: "#ffffff" }}>NUM</td>
                      <td style={{ color: "#ffffff" }}>BOOK</td>
                      <td style={{ color: "#ffffff" }}>Profit/Loss</td>
                    </tr>
                    {[...Array(10).keys()].map((num) => (
                      <tr key={num}>
                        <td>
                          <b style={{ color: "black", fontSize: "18px" }}>
                            {num}
                          </b>
                        </td>
                        <td>
                          <b>0</b>
                        </td>
                        <td>
                          <b>0</b>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-sx-12">
          <div className="panel panel-default">
            <div className="panel-body">
              <div
                className="patti"
                style={{ width: "341px", display: "inline-block" }}
              >
                <table className="table table-striped no-margin">
                  <tbody>
                    <tr style={{ background: "purple", color: "#ffffff" }}>
                      <td>Patti</td>
                      <td>Amt</td>
                      <td style={{ textAlign: "right" }}>Profit/Loss</td>
                    </tr>
                    {/* Add rows here as needed */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 col-sx-12">
          <div className="panel panel-default">
            <div className="panel-body">
              <table
                className="uk-table uk-table-striped"
                style={{ marginBottom: "0px", width: "100%" }}
              >
                <tbody>
                  <tr style={{ background: "purple", color: "#ffffff" }}>
                    <td colSpan="5">CURRENT OPEN STATUS</td>
                  </tr>
                  <tr>
                    <td>ROUND</td>
                    <td>PATTI</td>
                    <td>SINGLE</td>
                    <td>JODI</td>
                  </tr>
                  {["Open", "Close"].map((status) => (
                    <tr key={status}>
                      <td>{status}</td>
                      <td>
                        <span id={`st_${status.toLowerCase()}_patti`}></span>
                      </td>
                      <td>
                        <span id={`st_${status.toLowerCase()}_single`}></span>
                      </td>
                      <td>
                        <span id={`st_${status.toLowerCase()}_jodi`}></span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <table
                className="uk-table uk-table-striped"
                style={{ width: "100%" }}
              >
                <tbody>
                  <tr style={{ background: "purple", color: "#ffffff" }}>
                    <td colSpan="5">Total Due STATUS</td>
                  </tr>
                  <tr>
                    <tr>
                      <th>PATTI BOOKING RS.</th>
                      <th>
                        <span id="patti_status" className="text_dec"></span>
                      </th>
                    </tr>
                    <tr>
                      <th>Single + jodi</th>
                      <th>
                        <span id="patti_status" className="text_dec"></span>
                      </th>
                    </tr>
                    <tr>
                      <th>Net profit/Loss</th>
                      <th>
                        <span id="patti_status" className="text_dec"></span>
                      </th>
                    </tr>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Open;
