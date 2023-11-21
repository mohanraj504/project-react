import React, { Component } from 'react';
import "./register.css";
class Register extends Component {
  render() {
    return (
      <div className="login">
        <h4>Register Now</h4>
        <form>
          <div className="text_area">
            <input
              type="text"
              placeholder='First Name'
              className="text_input"
            />
          </div>
          <div className="text_area">
            <input
              type="password"
              placeholder='Last Name'
              className="text_input"
            />
          </div>
          <div className="text_area">
            <input
              type="password"
              placeholder='Enter Password'
              className="text_input"
            />
          </div>
          <input
            type="submit"
            value="Register"
            className="btn"
          />
        </form>
        </div>
    )
  }
}

export default Register;
