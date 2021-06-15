import { useState } from "react";
import style from "./index.module.css";
import GaugeChart from "react-gauge-chart";
import { useLocation, useParams } from "react-router";
import {data} from "../../data/test";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import GraphCard from "../../components/graphCard"
export default function SensorPage(){
  const { handle } = useParams();
  const location = useLocation() ;
  const { identity } = location.state
    const[state,setState]=useState({humidity:0,temperature:0});
    let table;
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
                <table class={"table"} id="table-to-xls">
                    <tr>
                        <th scope="col">Time</th>
                        <th scope="col">Temperature</th>
                        <th scope="col">Humidity</th>
                    </tr>
                   {data.map((reading,i)=>{return(
                   <tr key={"reading_"+i}>
                        <td>{i}</td>
                        <td>{reading.temperature}</td>  
                        <td>{reading.humudity}</td>
                    </tr>);})}
                </table>
      </div>
      <div className={"col-lg-6"}>
        <GraphCard/>
      <GaugeChart
          id="gauge-chart5"
          nrOfLevels={50}
          arcsLength={[0.3, 0.5, 0.2]}
          colors={["#5BE12C", "#F5CD19", "#EA4228"]}
          percent={0.37}
          arcPadding={0.02}
        />
      </div>
  </div>
</div>
</>
    );

}