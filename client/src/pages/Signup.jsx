import React from 'react';
import logo from '../images/logo.png';

class Signup extends React.Component {
  render() {
    return (
      <div className="signup">
        <div className="signup__container">
          <img className="signup__container_logo" alt="my logo green circle" src={logo} />
          <h1 className="signup__container_header">Welcome!</h1>

          <form className="signup__container_form">
            <h1 className="signup__container_input-name">Name</h1>
            <input
              className="signup__container_input"
              placeholder="Name"
              type="text"
            />

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
            <h1 className="signup__container_wrong">Something goes wrong</h1>
          </form>
          <button className="signup__container_button" type="submit">
            Sign Up
          </button>
          <div className="signup__bottom">
            <p className="signup__bottom-text">Already have an account?</p>
            <a className="signup__bottom-link" href="/signin">Sign In</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
