import {Line} from "react-chartjs-2";
import {useEffect, useState} from "react";
import {sensor_api_getSensorDataAll} from "../../data/api";
import Plot from 'react-plotly.js';
import axios from "axios";
import MediaQuery from "react-responsive/src";


const GraphCard = (props) => {

    const [x,setX] = useState([0])
    const [humidity,setHumidity] = useState([0])
    const [temperature,setTemperature] = useState([0])


    useEffect(()=>{    setX(props.time);
                             setHumidity(props.humidity);
                             setTemperature(props.temperature);
                             console.log(x,humidity,temperature)},[])
    return(
    <div {...props}>

        <MediaQuery minDeviceWidth={460}>
            {(matches) =>
            matches ? <Plot
                data={[
                    {
                        x: x,
                        y: temperature,
                        type: 'scatter',
                        name:"Temperature",
                        marker: {color: 'red'},
                    },
                    {
                        x: x,
                        y: humidity,
                        type: 'scatter',
                        name:"Humidity",
                        marker: {color: 'green'},
                    }

                ]}
                layout={ {width:500, height: 400}}

            />: <Plot
                data={[
                    {
                        x: x,
                        y: temperature,
                        type: 'scatter',
                        name:"Temperature",
                        marker: {color: 'red'},
                    },
                    {
                        x: x,
                        y: humidity,
                        type: 'scatter',
                        name:"Humidity",
                        marker: {color: 'green'},
                    }

                ]}
                layout={ {width:300, height: 200}}

            />
        }
        </MediaQuery>

    </div>);
};

export default GraphCard;