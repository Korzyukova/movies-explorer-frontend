import React from 'react';
import logo from '../images/logo.png';
import account from '../images/account.png';

class Header extends React.Component {
  user;

  constructor(props) {
    super(props);
    this.user = props.user;
  }

  render() {
    return (
      this.user
        ? (
          <header className="header__movies">
            <a href="/">
              <img className="header__logo" alt="my logo green circle" src={logo} />
            </a>
            <div className="header__links">
              <a className="header__links_movies" href="/movies">Movies</a>
              <a className="header__links_saved" href="/saved-movies">Saved movies</a>
              <a className="header__links_account" href="/profile">
                <p>Account</p>
                <div className="header__links_account-around-pic">
                  <img className="header__links_account-pic" alt="schematic human" src={account} />
                </div>
              </a>
            </div>
          </header>
        )
        : (
          <header className="header">
            <a href="/">
              <img className="header__logo" alt="my logo green circle" src={logo} />
            </a>
            <div className="header__links">
              <a className="header__links_signup" href="/signup">Sign Up</a>
              <a className="header__links_login" href="signin">Sign In</a>
            </div>
          </header>
        )
    );
  }
}
export default Header;
