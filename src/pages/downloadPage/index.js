import React, { Component, useEffect, useState } from "react";
import style from "./index.module.css"
import useSWR from "swr";
import RoomCard from "../../components/roomCard";
const fetcher = url => fetch(url).then(res => res.json());
const DownloadPage=()=> {
    const { data, error } = useSWR(
      "http://localhost:8080/api/roomAll",
      fetcher
    );

    return (
      <div className={style.dashboardWrapper}>
        {data? data.map((room)=>{return(<RoomCard room={room.name}/>)}):<div>Loading</div>}
      </div>
    );
  }


export default DownloadPage;
