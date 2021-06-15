import React, { Component, useEffect, useState } from "react";
import style from "./index.module.css"
import useSWR from "swr";
import RoomCard from "../../components/roomCard";
import { useLocation, useParams } from "react-router";
import SensorCard from "../../components/sensorCard";
import { Link} from "react-router-dom";
import SensorModal from "../../components/sensorModal";
const fetcher = url => fetch(url).then(res => res.json());
const RoomPage=()=> {
  const { handle } = useParams();
  const location = useLocation() ;
  const { name } = location.state
  const sensors=[{identity:"SensorOne"},
                 {identity:"SensorTwo"},
                 {identity:"SensorThree"}]
  const [show,setShow]=useState(false);
    return (
      <div>
           <SensorModal show={show} onHide={()=>setShow(false)}/>
        <div className={"d-flex flex-row justify-content-end  "+style.menuBar}>
         <button className={"btn btn-primary"} onClick={()=>setShow(true)}>Add Sensor</button>
        </div>
      
      <div className={"d-flex flex-row flex-wrap"}>
        {sensors.map((sensor)=>{
          return(
            <Link to={{
              pathname: "/sensor-data",
              state: {
                identity:sensor.identity,
              },
            }}><SensorCard identity={sensor.identity}/></Link>)
        })}
      </div>
      </div>
    );
  }


export default RoomPage;
