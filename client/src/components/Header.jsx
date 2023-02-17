import React from 'react';
import logo from '../images/logo.png';

class Header extends React.Component {
  links;

  constructor(props) {
    super(props);
    this.links = props.links;
  }

  render() {
    return (
      <header className="header">
        <img className="header__logo" alt="my logo green circle" src={logo} />
        <div className='header__links'>
          <a className="header__links_signup" href="https://github.com/Korzyukova">Sign Up</a>
          <a className="header__links_login" href="https://github.com/Korzyukova">Log In</a>
        </div>
      </header>
    );
  }
}
export default Header;

/*
constructor() {}
*/
