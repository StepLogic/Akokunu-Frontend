import React, { Component } from "react";
import DataCard from "../Components/DataCard";
import "../Styles/bootstrap.css";
import "../Styles/index.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="dashboard-wrapper">
        <DataCard room={"Capecoast"} sensor={"C1"} temp={25} humidity={45} />
        <DataCard room={"Capecoast"} sensor={"C1"} temp={25} humidity={45} />
        <DataCard room={"Capecoast"} sensor={"C1"} temp={25} humidity={45} />
        <DataCard room={"Capecoast"} sensor={"C1"} temp={25} humidity={45} />
        <DataCard room={"Capecoast"} sensor={"C1"} temp={25} humidity={45} />
        <DataCard room={"Capecoast"} sensor={"C1"} temp={25} humidity={45} />
        <DataCard room={"Capecoast"} sensor={"C1"} temp={25} humidity={45} />
        <DataCard room={"Capecoast"} sensor={"C1"} temp={25} humidity={45} />
        <DataCard room={"Capecoast"} sensor={"C1"} temp={25} humidity={45} />
        <DataCard room={"Capecoast"} sensor={"C1"} temp={25} humidity={45} />
        <DataCard room={"Capecoast"} sensor={"C1"} temp={25} humidity={45} />
        <DataCard room={"Capecoast"} sensor={"C1"} temp={25} humidity={45} />
        <DataCard room={"Capecoast"} sensor={"C1"} temp={25} humidity={45} />
        <DataCard room={"Capecoast"} sensor={"C1"} temp={25} humidity={45} />
        <DataCard room={"Capecoast"} sensor={"C1"} temp={25} humidity={45} />
        <DataCard room={"Capecoast"} sensor={"C1"} temp={25} humidity={45} />
        <DataCard room={"Capecoast"} sensor={"C1"} temp={25} humidity={45} />
        <DataCard room={"Capecoast"} sensor={"C1"} temp={25} humidity={45} />
        <DataCard room={"Capecoast"} sensor={"C1"} temp={25} humidity={45} />
        <DataCard room={"Capecoast"} sensor={"C1"} temp={25} humidity={45} />
      </div>
    );
  }
}

export default Dashboard;
