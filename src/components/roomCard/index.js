import { useState } from "react";
import style from "./index.module.css"
import {WiThermometer,WiHumidity} from "react-icons/wi";
export default function RoomCard(props){
    const[state,setState]=useState({humidity:0,temperature:0});
    return(
<>
<div className={style.Card} {...props}>
        <p>
          {props.room}<span></span>
        </p>
        <div className={"row "}>
        <div className={"col-6 "}>
            <WiThermometer className={style.icon}/>
            <div className={"d-flex flex-row  "+style.info}>
            {state.temperature?state.temperature:<div class="spinner-grow mt-2" role="status">
                 </div>}
              <span className={style.symbols}>&#8451;</span>
            </div>

          </div>
          <div className={"col-6 "}>
            <WiHumidity  className={style.icon}/>
            <div className={"d-flex flex-row  "+style.info}>
              {state.humidity?state.humidity:<div class="spinner-grow mt-2" role="status"></div>}
              <span className={style.symbols}>%</span>
            </div>
          </div>
        </div>
      </div>
</>
    );

}