import React from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const DashBoard = () => {
  const games = [
    {
      img: "/img/draw1.png",
      name: "Rajdhani Day",
      openTime: "15:05",
      closeTime: "17:05",
    },
    {
      img: "/img/draw2.png",
      name: "Dadar",
      openTime: "12:00",
      closeTime: "13:00",
    },

    {
      img: "/img/draw3.png",
      name: "Good Morning",
      openTime: "10:05",
      closeTime: "11:05",
    },
    {
      img: "/img/draw1.png",
      name: "BOMBAY EXP",
      openTime: "12:05",
      closeTime: "13:05",
    },
    {
      img: "/img/draw2.png",
      name: "GOLDEN",
      openTime: "14:05",
      closeTime: "15:05",
    },
    {
      img: "/img/draw3.png",
      name: "KALAYAN",
      openTime: "16:55",
      closeTime: "18:55",
    },
    {
      img: "/img/draw4.png",
      name: "GOLDSTAR",
      openTime: "19:35",
      closeTime: "20:35",
    },
    {
      img: "/img/draw4.png",
      name: "GOLDEN NIGHT",
      openTime: "21:35",
      closeTime: "23:30",
    },
    {
      img: "/img/draw1.png",
      name: "Kalyan Night",
      openTime: "21:40",
      closeTime: "23:40",
    },
    {
      img: "/img/draw2.png",
      name: "Rajdhani Night",
      openTime: "21:30",
      closeTime: "23:45",
    },
    {
      img: "/img/draw3.png",
      name: "Sridevi",
      openTime: "11:30",
      closeTime: "12:30",
    },
    {
      img: "/img/draw4.png",
      name: "Milan Day",
      openTime: "15:15",
      closeTime: "17:15",
    },
    {
      img: "/img/draw1.png",
      name: "Milan Night",
      openTime: "21:10",
      closeTime: "23:10",
    },
    {
      img: "/img/draw2.png",
      name: "Time Bazar",
      openTime: "13:10",
      closeTime: "14:10",
    },
    {
      img: "/img/draw3.png",
      name: "Tara Mumbai Day",
      openTime: "13:30",
      closeTime: "15:00",
    },
  ];

  return (
    <div className="dashboard-wrapper">
      <div>
        <div className="top-bar clearfix">
          <div className="page-title">
            <h4>
              <div className="fs1" aria-hidden="true" data-icon=""></div>
              Dashboard
            </h4>
          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-heading clearfix">
            <i className="icon-calendar"></i>
            <h3 className="panel-title">Game List &amp; Time</h3>
          </div>

          <table className="table table-condensed table-striped table-bordered table-hover no-margin">
            <thead style={{ background: "cadetblue", color: "#fff" }}>
              <tr>
                <th className="uk-width-2-10" style={{ color: "#ffffff" }}>
                  Name
                </th>
                <th className="uk-width-2-10" style={{ color: "#ffffff" }}>
                  Open Time
                </th>
                <th className="uk-width-2-10" style={{ color: "#ffffff" }}>
                  Cls Time
                </th>
              </tr>
            </thead>
            <tbody id="games">
              {games.map((game, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={game.img}
                      alt={game.name}
                      style={{ width: "30px" }}
                    />{" "}
                    {game.name}
                  </td>
                  <td>{game.openTime}</td>
                  <td>{game.closeTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-md-12 col-sm-12 col-sx-12">
          <div className="panel panel-default">
            <div className="panel-heading clearfix">
              <i className="icon-calendar"></i>
              <h3 className="panel-title">Winner List</h3>
            </div>

            <table className="table table-condensed table-striped table-bordered table-hover no-margin">
              <thead style={{ background: "cadetblue", color: "#fff" }}>
                <tr>
                  <th className="uk-text-nowrap">Date</th>
                  <th className="uk-width-2-10">Draw</th>
                  <th className="uk-text-nowrap">Type</th>
                  <th className="uk-text-nowrap">No.</th>
                  <th className="uk-text-nowrap">Rs./-</th>
                  <th className="uk-text-nowrap">User</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
