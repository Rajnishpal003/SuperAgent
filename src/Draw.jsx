import React from "react";
import "./App.css"; // Make sure your styles are defined here

const DrawMaster = () => {
  const games = [
    {
      name: "Madhur Morning",
      openTime: "11:30",
      closedTime: "12:30",
      link: "https://super.bombaymatka.in/SuperDrawMaster/PlayDemo/26",
      isRunning: false,
    },
    {
      name: "Goa Golden",
      openTime: "16:05",
      closedTime: "17:05",
      link: "https://super.bombaymatka.in/SuperDrawMaster/PlayDemo/27",
      isRunning: true,
    },
    {
      name: "Goa",
      openTime: "18:05",
      closedTime: "18:06",
      link: "https://super.bombaymatka.in/SuperDrawMaster/PlayDemo/28",
      isRunning: true,
    },
    {
      name: "Gaziyabad",
      openTime: "20:50",
      closedTime: "20:51",
      link: "https://super.bombaymatka.in/SuperDrawMaster/PlayDemo/29",
      isRunning: true,
    },
    {
      name: "Gali",
      openTime: "23:25",
      closedTime: "23:26",
      link: "https://super.bombaymatka.in/SuperDrawMaster/PlayDemo/30",
      isRunning: true,
    },
    {
      name: "Gali",
      openTime: "23:25",
      closedTime: "23:26",
      link: "https://super.bombaymatka.in/SuperDrawMaster/PlayDemo/30",
      isRunning: true,
    },
    {
      name: "Gali",
      openTime: "23:25",
      closedTime: "23:26",
      link: "https://super.bombaymatka.in/SuperDrawMaster/PlayDemo/30",
      isRunning: true,
    },
    {
      name: "Gali",
      openTime: "23:25",
      closedTime: "23:26",
      link: "https://super.bombaymatka.in/SuperDrawMaster/PlayDemo/30",
      isRunning: true,
    },
    {
      name: "Gali",
      openTime: "23:25",
      closedTime: "23:26",
      link: "https://super.bombaymatka.in/SuperDrawMaster/PlayDemo/30",
      isRunning: true,
    },
    {
      name: "Gali",
      openTime: "23:25",
      closedTime: "23:26",
      link: "https://super.bombaymatka.in/SuperDrawMaster/PlayDemo/30",
      isRunning: true,
    },
    {
      name: "Gali",
      openTime: "23:25",
      closedTime: "23:26",
      link: "https://super.bombaymatka.in/SuperDrawMaster/PlayDemo/30",
      isRunning: true,
    },
    {
      name: "Gali",
      openTime: "23:25",
      closedTime: "23:26",
      link: "https://super.bombaymatka.in/SuperDrawMaster/PlayDemo/30",
      isRunning: true,
    },
    // Add more game objects as needed
  ];

  return (
    <div>
      <div className="top-bar clearfix">
        <div className="page-title">
          <h4>
            <div className="fs1" aria-hidden="true" data-icon=""></div>
            Draw Master
          </h4>
        </div>
      </div>
      <table className="table table-condensed table-striped table-bordered table-hover no-margin">
        <thead style={{ background: "cadetblue", color: "#fff" }}>
          <tr>
            <th className="uk-width-2-10">Name</th>
            <th className="uk-width-2-10">Open Time</th>
            <th className="uk-width-2-10">Closed Time</th>
          </tr>
        </thead>
        <tbody>
          {games.map((game, index) => (
            <tr key={index} className={game.isRunning ? "border_blink" : ""}>
              <td>
                <img
                  src="https://super.bombaymatka.in/assets/img/"
                  style={{ width: "30px" }}
                  alt=""
                />
                <span className="font-fam">
                  <a href={game.link}>{game.name}</a>
                </span>
                {game.isRunning && (
                  <>
                    <img
                      src="https://super.bombaymatka.in/arrow.gif"
                      style={{ width: "25px" }}
                      alt=""
                    />
                    <span className="blinking">Game is Running</span>
                  </>
                )}
              </td>
              <td className={game.isRunning ? "border_blink" : ""}>
                {game.openTime}
              </td>
              <td className={game.isRunning ? "border_blink" : ""}>
                {game.closedTime}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Rate Table */}
      <table className="table table-condensed table-striped table-bordered table-hover no-margin">
        <thead style={{ background: "cadetblue", color: "#fff" }}>
          <tr>
            <th className="uk-width-2-10" style={{ color: "#fff" }}>
              Type
            </th>
            <th className="uk-width-2-10" style={{ color: "#fff" }}>
              Commission
            </th>
            <th className="uk-width-2-10" style={{ color: "#fff" }}>
              Rate
            </th>
            <th className="uk-width-2-10" style={{ color: "#fff" }}>
              Rate
            </th>
          </tr>
        </thead>
        <tbody>
          {[
            { type: "Single", commission: "5%", rate1: "10/-", rate2: "95/-" },
            { type: "Jodi", commission: "5%", rate1: "10/-", rate2: "950/-" },
            {
              type: "Single Patti",
              commission: "5%",
              rate1: "10/-",
              rate2: "142.5/-",
            },
            {
              type: "Double Patti",
              commission: "5%",
              rate1: "10/-",
              rate2: "285/-",
            },
            {
              type: "Tripel Patti",
              commission: "5%",
              rate1: "10/-",
              rate2: "950/-",
            },
            { type: "Single", commission: "10%", rate1: "10/-", rate2: "90/-" },
            { type: "Jodi", commission: "10%", rate1: "10/-", rate2: "900/-" },
            {
              type: "Single Patti",
              commission: "10%",
              rate1: "10/-",
              rate2: "135/-",
            },
            {
              type: "Double Patti",
              commission: "10%",
              rate1: "10/-",
              rate2: "270/-",
            },
            {
              type: "Tripel Patti",
              commission: "10%",
              rate1: "10/-",
              rate2: "900/-",
            },
            { type: "Single", commission: "20%", rate1: "10/-", rate2: "80/-" },
            { type: "Jodi", commission: "20%", rate1: "10/-", rate2: "800/-" },
            {
              type: "Single Patti",
              commission: "20%",
              rate1: "10/-",
              rate2: "125/-",
            },
            {
              type: "Double Patti",
              commission: "20%",
              rate1: "10/-",
              rate2: "240/-",
            },
            {
              type: "Tripel Patti",
              commission: "20%",
              rate1: "10/-",
              rate2: "800/-",
            },
          ].map((row, index) => (
            <tr key={index}>
              <td style={{ fontSize: "14px", fontWeight: 600 }}>{row.type}</td>
              <td>{row.commission}</td>
              <td>{row.rate1}</td>
              <td>{row.rate2}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="4">
              <hr />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DrawMaster;
