import React, { Component, useEffect, useState } from "react";
import style from "./index.module.css";
import useSWR from "swr";
import { useLocation, useParams } from "react-router";
import SensorCard from "../../components/sensorCard";
import { Link } from "react-router-dom";
import SensorModal from "../../components/sensorModal";
const fetcher = (url) => fetch(url).then((res) => res.json());
const RoomPage = () => {
  const { handle } = useParams();
  const location = useLocation();
  const { name } = location.state;
  const sensors = [
    { identity: "SensorOne" },
    { identity: "SensorTwo" },
    { identity: "SensorThree" },
    
  ];
  const [show, setShow] = useState(false);
  return (
    <div>
      <SensorModal show={show} onHide={() => setShow(false)} />
      <div className={style.menuContainer}>
        <button className={style.customBtn} onClick={() => setShow(true)}>
          Add Sensor
        </button>
      </div>

      <div className={style.dashboardWrapper}>
        {sensors.map((sensor) => {
          return (
            <Link
              to={{
                pathname: "/sensor-data",
                state: {
                  identity: sensor.identity,
                },
              }}
            >
              <SensorCard identity={sensor.identity} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default RoomPage;
