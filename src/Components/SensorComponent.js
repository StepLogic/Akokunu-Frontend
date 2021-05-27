import React, { Component } from "react";
import GaugeChart from "react-gauge-chart";

class SensorComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <GaugeChart
          id="gauge-chart5"
          nrOfLevels={50}
          arcsLength={[0.3, 0.5, 0.2]}
          colors={["#5BE12C", "#F5CD19", "#EA4228"]}
          percent={0.37}
          arcPadding={0.02}
        />
      </div>
    );
  }
}

export default SensorComponent;
