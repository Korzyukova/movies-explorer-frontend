import React from 'react';
import logo from '../images/logo.png';
import account from '../images/account.png';
import hamburger from '../images/hamburger.png';
import bigcross from '../images/bigcross.png';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.user = props.user;
    this.color = props.color;
    this.state = {
      hamburgerOpen: false,
    };
  }

  render() {
    const { hamburgerOpen } = this.state;
    return (
      <div className={`header__container ${this.color ? 'header__container_color' : ''}`}>
        {this.user
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
              <button className="header__hamburger" onClick={() => { this.setState({ hamburgerOpen: true }); }} type="button">
                <img className="header__hamburger-icon" src={hamburger} alt="hamburger icon" />
              </button>
            </header>
          )
          : (
            <header className="header">
              <a href="/">
                <img className="header__logo" alt="my logo green circle" src={logo} />
              </a>
              <div className="header__links header__links_on">
                <a className="header__links_signup" href="/signup">Sign Up</a>
                <a className="header__links_login" href="signin">Sign In</a>
              </div>
            </header>
          )}
        {
            hamburgerOpen && (
              <>
                <div className="header__hamburger_menu">
                  <button className="header__hamburger_menu-cross" onClick={() => { this.setState({ hamburgerOpen: false }); }} type="button">
                    <img className="header__hamburger_menu-cross" src={bigcross} alt="big cross" />
                  </button>
                  <ul className="header__hamburger_menu-list">
                    <li className="header__hamburger_menu-listitem"><a className="header__hamburger_link" href="/">Main page</a></li>
                    <li className="header__hamburger_menu-listitem"><a className="header__hamburger_link" href="/movies">Movies</a></li>
                    <li className="header__hamburger_menu-listitem"><a className="header__hamburger_link " href="/saved-movies">Saved movies</a></li>
                  </ul>

                  <button className="header__hamburger_button" type="button" onClick={() => { window.location.href = '/profile'; }}>Profile</button>
                </div>
                <div className="header__hamburger_shade" />

              </>
            )
          }
      </div>
    );
  }
}
export default Header;
