import {Line} from "react-chartjs-2";
import {useEffect, useState} from "react";
import {sensor_api_getSensorDataAll} from "../../data/api";
import Plot from 'react-plotly.js';
import axios from "axios";
import MediaQuery from "react-responsive/src";


const GraphCard = (props) => {

    return(
    <div {...props}>

        <MediaQuery minDeviceWidth={460}>
            {(matches) =>
            matches ? <Plot
                data={[
                    {
                        x:props.time,
                        y: props.temperature,
                        type: 'scatter',
                        name:"Temperature",
                        marker: {color: 'red'},
                    },
                    {
                        x: props.x,
                        y: props.humidity,
                        type: 'scatter',
                        name:"Humidity",
                        marker: {color: 'green'},
                    }

                ]}
                layout={ {width:500, height: 400}}

            />: <Plot
                data={[
                    {
                        x: props.x,
                        y: props.temperature,
                        type: 'scatter',
                        name:"Temperature",
                        marker: {color: 'red'},
                    },
                    {
                        x: props.x,
                        y: props.humidity,
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