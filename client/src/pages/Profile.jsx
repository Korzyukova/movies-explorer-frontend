import React from 'react';
import logo from '../images/logo.png';

class Profile extends React.Component {
  render() {
    return (
      <div className="signup">
        <div className="signup__container">
          <img className="signup__container_logo" alt="my logo green circle" src={logo} />
          <h1 className="signup__container_header">Welcome back!</h1>

          <form className="signup__container_form">

            <h1 className="signup__container_input-name">E-mail</h1>
            <input
              className="signup__container_input"
              placeholder="Email"
              type="email"
            />

            <h1 className="signup__container_input-name">Password</h1>
            <input
              className="signup__container_input"
              placeholder="Password"
              type="password"
            />
          </form>
          <button className="signup__container_button" type="submit">
            Sign Up
          </button>
        </div>
      </div>
    );
  }
}

export default Profile;
