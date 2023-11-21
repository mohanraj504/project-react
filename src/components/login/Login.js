import React, { Component } from 'react';
import "./login.css";
class Signin extends Component {
  render() {
    return (
      <div className="login">
        <h4>LOGIN</h4>
        <form>
          <div className="text_area">
            <input
              type="text"
              placeholder='Enter Username'
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
            value="Submit"
            className="btn"
          />
        </form>
        <div className='flex'>
        
        </div>
      </div>
    )
  }
}

export default Signin;
