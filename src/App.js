import React, { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import RoomPage from "./pages/roomPage";
import DownloadPage from "./pages/downloadPage";
import SideNav from "./components/sideNav";
import SensorPage from "./pages/sensorPage";
import LoginPage from "./pages/loginPage";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Dashboard />,
  },
  {
    path: "/room-data",
    exact: true,
    main: () => <RoomPage />,
  },
  {
    path: "/data-download",
    exact: true,
    main: () => <DownloadPage />,
  },
  {
    path: "/sensor-data",
    exact: true,
    main: () => <SensorPage />,
  },
];

const initialState = false;
function reducer(state, action) {
  switch (action.type) {
    case true:
      state = true;
      return state;
    case false:
      state = false;
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const content = (
    <div className="row my-container">
      <div className="side-navbar">
        <SideNav dispatch={dispatch} />
      </div>
      <div className="main-view">
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
  );

  const login = <LoginPage dispatch={dispatch} />;
  return <Router>{state ? content : login}</Router>;
};

export default App;
