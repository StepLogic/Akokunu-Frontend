import React, { Component, useEffect, useState } from "react";
import style from "./index.module.css";
import useSWR from "swr";
import RoomCard from "../../components/roomCard";
import { Link } from "react-router-dom";
import RoomModal from "../../components/roomModal";
const fetcher = (url) => fetch(url).then((res) => res.json());
const Dashboard = () => {
  const data = [
    { name: "RoomOne" },
    { name: "RoomTwo" },
    { name: "RoomTwo" },
    { name: "RoomTwo" },
    { name: "RoomTwo" },
    { name: "RoomTwo" },
    { name: "RoomTwo" },
  ];
  const [show, setShow] = useState(false);
  return (
    <div>
      <RoomModal show={show} onHide={() => setShow(false)} />
      <div className={style.menuContainer}>
        <button className={style.customBtn} onClick={() => setShow(true)}>
          Add Room
        </button>
      </div>
      <div className={style.dashboardWrapper}>
        {data ? (
          data.map((room) => {
            return (
              <Link
                to={{
                  pathname: "/room-data",
                  state: {
                    name: room.name,
                  },
                }}
              >
                <RoomCard room={room.name} />
              </Link>
            );
          })
        ) : (
          <div>Loading</div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
