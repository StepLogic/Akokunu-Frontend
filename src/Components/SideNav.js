import React, { Component } from "react";
import Dashboard from "../Pages/Dashboard";
import "../Styles/bootstrap.css";
import RoomDetailsPage from "../Pages/RoomDetailsPage";
import DownloadPage from "../Pages/DownloadPage";

import {
  FaChartBar,
  FaDatabase,
  FaDownload,
  FaSignOutAlt,
  FaSkyatlas,
  FaTachometerAlt,
} from "react-icons/fa";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Dashboard />,
  },
  {
    path: "/room-data",
    exact: true,
    main: () => <RoomDetailsPage />,
  },
  {
    path: "/data-download",
    exact: true,
    main: () => <DownloadPage />,
  },
];

class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <div className="row">
          <div className="col-lg-2">
            <div className="side-nav-wrapper">
              <div className="logo-wrapper">
                <FaSkyatlas className="dash-logo" />
                <h4 className="dash-header">Live Aku Monitor</h4>
              </div>

              <Link to="/">
                <hr></hr>
                <div className="menu-item-wrapper">
                  <p>
                    <span>
                      <FaTachometerAlt className="menu-item-img" />
                    </span>
                    Dashboard
                  </p>
                </div>
              </Link>
              <hr></hr>
              <Link to="/room-data">
                <div className="menu-item-wrapper">
                  <p>
                    <span>
                      <FaDatabase className="menu-item-img" />
                    </span>
                    Room Data
                  </p>
                </div>
              </Link>
              <hr></hr>

              <div className="menu-item-wrapper">
                <p>
                  <span>
                    <FaChartBar className="menu-item-img" />
                  </span>
                  Analytics
                </p>
              </div>
              <hr></hr>
              <Link to="/data-download">
                <div className="menu-item-wrapper">
                  <p>
                    <span>
                      <FaDownload className="menu-item-img" />
                    </span>
                    Data Download
                  </p>
                </div>
              </Link>
              <hr></hr>
              <div className="signout">
                <hr></hr>
                <div className="menu-item-wrapper">
                  <p>
                    <span>
                      <FaSignOutAlt className="menu-item-img" />
                    </span>
                    Sign Out
                  </p>
                </div>
                <hr></hr>
              </div>
            </div>
          </div>
          <div className="col-lg-10">
            <Switch>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={route.main}
                />
              ))}
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default SideNav;
