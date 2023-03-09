import React from 'react';
import logo from '../images/logo.png';

class Header extends React.Component {
  links;

  constructor(props) {
    super(props);
    this.links = props.links;
  }

  render() {
    const [links1, links2, links3] = this.links;
    return (
      <header className="header">
        <a href={links3}>
          <img className="header__logo" alt="my logo green circle" src={logo} />
        </a>
        <div className="header__links">
          <a className="header__links_signup" href={links1}>Sign Up</a>
          <a className="header__links_login" href={links2}>Log In</a>
        </div>
      </header>
    );
  }
}
export default Header;
