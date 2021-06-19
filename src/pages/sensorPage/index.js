import {useEffect, useState} from "react";
import style from "./index.module.css";
import GaugeChart from "react-gauge-chart";
import { useLocation, useParams,useHistory } from "react-router";
import {data} from "../../data/test";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import GraphCard from "../../components/graphCard"
import axios from "axios";
import {room_api_getSensors, sensor_api_getSensorData, sensor_api_getSensorDataAll} from "../../data/api";
export default function SensorPage(){
  const { handle } = useParams();
  const location = useLocation() ;
    let history = useHistory();
    const { identity } = location.state?location.state:history.push("/")
    let current_date="";
    let  date_info;
    let  minutes;
    let  time;
    let humidity = [];
    let temperature = [];
    let time_arr = [];
    const [data,setData] = useState([{humidity:0,temperature:0,timestamp:"2021-05-31T12:16:59.020Z"}])

    useEffect(()=>{
        try {
            const body = {
                identity: identity
            };
            axios.post(sensor_api_getSensorDataAll, body).then(res => setData(res.data));
        }catch (e){
            alert("Backend Unavailable Contact Admin")
        }
    },[])
    const handler=(reading)=>{
        var date= new Date(reading.timestamp);
        time=date.getMinutes();
        minutes=date.getMinutes()+date.getHours()*60
        time_arr.push(minutes)
        humidity.push(reading.humidity)
        temperature.push(reading.temperature)
        if (current_date===date.getDate().toString()){

        }
        else {
            date_info=date.getDay()+"-"+date.toLocaleString('default', { month: 'long' })+"-"+date.getFullYear()
            current_date=date.getDate().toString()
        }
     return date_info

    }
    return(
<>
<div className={"container-fluid"}>
<div className={"d-flex flex-row justify-content-end"}>
       <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className={"btn btn-primary "+style.excelDownloadButton}
                    table="table-to-xls"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Download as XLS"/> 
         </div>

  <div className={"row"}>
    <div className={"col-lg-6"}>
        <div className={style.tableContainer}>
                <table className={"table"} style={{overflow:"auto"}} id="table-to-xls">
                    <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                        <th scope="col">Temperature</th>
                        <th scope="col">Humidity</th>
                    </tr>
                    </thead>
                    <tbody>
                   {data?data.map((reading,i)=>{
                       handler(reading);
                       let row;
                       if ((minutes % 10)===0){
                           row= <tr key={"reading_"+i}>
                               <td>{date_info}</td>
                               <td>{minutes}</td>
                               <td>{reading.temperature}</td>
                               <td>{reading.humidity}</td>
                           </tr>
                       }
                       return row;}):<div>Loading</div>}
                    </tbody>
                </table>
        </div>
      </div>
      <div className={"col-lg-6"}>
        <GraphCard className={style.graphContainer} time={time_arr} humidity={humidity} temperature={temperature}/>
<div style={{backgroundColor:"black"}}>
</div>
      </div>
  </div>

    <div className={"d-flex flex-row justify-content-center "+style.gaugeContainer}>
        <GaugeChart
            id="gauge-chart5"
            nrOfLevels={50}
            arcsLength={[0.3, 0.5, 0.2]}
            colors={["#5BE12C", "#F5CD19", "#EA4228"]}
            percent={data[0]?data[0].humidity/100:0}
            arcPadding={0.02}
        />
        <GaugeChart
            id="gauge-chart5"
            nrOfLevels={50}
            arcsLength={[0.3, 0.5, 0.2]}
            colors={["#5BE12C", "#F5CD19", "#EA4228"]}
            percent={data[0]?data[0].humidity/100:0}
            arcPadding={0.02}

        />
    </div>

</div>
</>
    );

}