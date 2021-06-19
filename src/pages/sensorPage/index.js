import {useEffect, useState} from "react";
import style from "./index.module.css";
import GaugeChart from "react-gauge-chart";
import { useLocation, useParams,useHistory } from "react-router";
import {data} from "../../data/test";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import GraphCard from "../../components/graphCard"
import axios from "axios";
import {sensor_api_getSensorDataAll} from "../../data/api";
import {trigger} from "swr";
export default function SensorPage(){
  const { handle } = useParams();
  const location = useLocation() ;
    let history = useHistory();
    const {identity}  = location.state===undefined||null? {identity:null} : location.state;
    let current_date="none";
    let count=0;
    let  date_info;
    let  minutes;
    let  time;
    let humidity = [];
    let temperature = [];
    let time_arr = [];
    const [data,setData] = useState([{humidity:0,temperature:0,timestamp:"2021-05-31T12:16:59.020Z"}])
    const  [toggle,setToggle]=useState(false);
    useEffect(()=>{
        try {
            if(typeof identity===undefined||null){
                setData(JSON.parse(window.localStorage.getItem("sensors-data"))?JSON.parse(window.localStorage.getItem("sensors")):[{humidity:0,temperature:0,timestamp:"2021-05-31T12:16:59.020Z"}]);
            }else{
                console.log("SensorData")
                const body = {
                    identity: identity
                };
                axios.post(sensor_api_getSensorDataAll, body).then(res => {
                    setData(res.data);
                    window.sessionStorage.setItem("sensor-data", JSON.stringify(res.data))
                }).catch(res=>{console.log(res)});
            }
        }catch (e){
            alert("Backend Unavailable Contact Admin")
        }
        const intervalID = setTimeout(() =>  {
            setToggle((toggle) => !toggle)
        }, 3000);

        return () => clearInterval(intervalID);
    },[])


    const getMinutes=(reading)=>{
        let date= new Date(reading.timestamp);
        minutes=date.getMinutes()+date.getHours()*60
    }
    const handler=(reading)=>{
        let date= new Date(reading.timestamp);
        time_arr.push(minutes);
        humidity.push(reading.humidity);
        temperature.push(reading.temperature);
        date_info=date.getDay()+"-"+date.toLocaleString('default', { month: 'long' })+"-"+date.getFullYear();
        if (current_date===date_info){
            date_info="";
        }
        else {
            current_date=date_info;
        }
     return date_info;

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
                       getMinutes(reading);
                       let row;
                       if ((minutes % 10)===0){
                           handler(reading)
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
            id="gauge-chart-1"
            nrOfLevels={50}
            textColor={"#000000"}
            arcsLength={[0.3, 0.5, 0.2]}
            colors={["#5BE12C", "#F5CD19", "#EA4228"]}
            percent={temperature[0]/45}
            arcPadding={0.02}
            style={{height:10}}
        />
        <GaugeChart
            id="gauge-chart-2"
            nrOfLevels={50}
            arcsLength={[0.3, 0.5, 0.2]}
            textColor={"#000000"}
            colors={["#5BE12C", "#F5CD19", "#EA4228"]}
            percent={humidity[0]/100}
            arcPadding={0.02}
            style={{height:10}}
        />
    </div>

</div>
</>
    );

}