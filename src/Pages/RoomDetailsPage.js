import React, { Component } from "react";
import "../Styles/index.css";
import "../Styles/bootstrap.css";
import SensorComponent from "../Components/SensorComponent";


const rooms = [
  "Lab",
  "Winnneba",
  "Takoradi",
  "Wa",
  "Feed St.",
  "RES",
  "Outside",
  "Outdoor ",
  "Tent-1",
  "Tent-2",
  "Cage",
];
class RoomDetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = { room: "Lab", temp: 25, humidity: 85};
    this.selectOnChange = this.selectOnChange.bind(this);
  }
  selectOnChange = (event) => {
    this.setState({
      room: event.target.value,
    });
  };
  render() {
    return (
      <div>
        <select
          value={this.state.room}
          onChange={this.selectOnChange}
          className="room-dropdown"
        >
          {rooms.map((room) => (
            <option value={room}>{room}</option>
          ))}
        </select>
        <div className="row">
          <div className="col-lg-6 room-container left-card">
            <div className="row">
              <div className="col-3 mini-stat-cards">
                <h6 className="card-title">Average Temperature</h6>
                <p className="my-card-body">{this.state.temp}&#176;C</p>
              </div>
              <div className="col-3 mini-stat-cards">
                <h6 className="card-title">Average Humidity</h6>
                <p className="my-card-body">{this.state.humidity}%</p>
              </div>
              <div className="col-5 mini-stat-cards">
                <h6 className="card-title">Room</h6>
                <p className="my-card-body">{this.state.room}</p>
              </div>
            </div>
            <div className="row sensor-card">
              <SensorComponent value={25}/>
            </div>
          </div>
          <div className="col-lg-6 room-container"></div>
        </div>
      </div>
    );
  }
}

export default RoomDetailsPage;
