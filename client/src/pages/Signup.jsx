import React from 'react';
import logo from '../images/logo.png';

class Signup extends React.Component {
  render() {
    return (
      <section className="signup">
        <div className="signup__container">
          <a href="/">
            <img className="signup__container-logo" alt="my logo green circle" src={logo} />
          </a>
          <h1 className="signup__container-header">Welcome!</h1>

          <form className="signup__container-form">
            <h1 className="signup__container-input-name">Name</h1>
            <input
              className="signup__container-input"
              placeholder="Name"
              type="text"
            />

            <h1 className="signup__container-input-name">E-mail</h1>
            <input
              className="signup__container-input"
              placeholder="Email"
              type="email"
            />

            <h1 className="signup__container-input-name">Password</h1>
            <input
              className="signup__container-input"
              placeholder="Password"
              type="password"
            />
            <h1 className="signup__container-wrong">Something goes wrong</h1>
          </form>
          <button className="signup__container-button" type="submit">
            Sign Up
          </button>
          <div className="signup__bottom">
            <p className="signup__bottom-text">Already have an account?</p>
            <a className="signup__bottom-link" href="/signin">Sign In</a>
          </div>
        </div>
      </section>
    );
  }
}

export default Signup;
