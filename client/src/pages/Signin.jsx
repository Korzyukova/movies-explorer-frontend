import React from 'react';
import logo from '../images/logo.png';

class Signin extends React.Component {
  render() {
    return (
      <div className="signup">
        <div className="signup__container">
          <a href="/">
            <img className="signup__container_logo" alt="my logo green circle" src={logo} />
          </a>
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
            Sign In
          </button>
          <div className="signup__bottom">
            <p className="signup__bottom-text">Have no account yet?</p>
            <a className="signup__bottom-link" href="/signup">Sign Up</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
