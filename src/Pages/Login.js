import React, { Component } from "react";
import "../Styles/bootstrap.css";
import "../Styles/index.css";
import { FaSkyatlas } from"react-icons/fa";


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="my-bg">
        <div className="login-card">
            <FaSkyatlas className="logo"/>
            <h3 className="my-title">Legendary Smart Monitor</h3>
            <input type="text" placeholder="Username..." className="input-format"/>
            <input type="password" placeholder="Password..." className="input-format"/>
            <button className="my-button">Login</button>
        </div>
      </div>
    );
  }
}

export default Login;
