import React, { Component } from "react";
import "../Styles/bootstrap.css";
import { WiHumidity, WiThermometer } from "react-icons/wi";

import "../Styles/index.css";

class DataCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="data-card">
        <p>
          {this.props.room} <span>{this.props.sensor}</span>
        </p>
        <div className="sub-card-wrapper">
          <div className="sub-card">
            <div className="icon-wrapper">
              <WiThermometer className="sub-card-img" />
            </div>
            <p className="readings-format">
              {this.props.temp}
              <span className="symbols">&#8451;</span>
            </p>
          </div>
          <div className="sub-card">
            <div className="icon-wrapper">
              <WiHumidity className="sub-card-img" />
            </div>
            <p className="readings-format">
              {this.props.humidity}
              <span className="symbols">%</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default DataCard;
