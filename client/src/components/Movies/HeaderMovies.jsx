import React from 'react';
import logo from '../../images/logo.png';
import account from '../../images/account.png';

class HeaderMovies extends React.Component {
  links;

  constructor(props) {
    super(props);
    this.links = props.links;
  }

  render() {
    const [links1, links2, links3, links4] = this.links;
    return (
      <header className="header__movies">
        <a href={links4}>
          <img className="header__logo" alt="my logo green circle" src={logo} />
        </a>
        <div className="header__links">
          <a className="header__links-movies" href={links1}>Movies</a>
          <a className="header__links-saved" href={links2}>Saved movies</a>
          <a className="header__links-account" href={links3}>
            <p>Account</p>
            <div className="header__links-accountpicaround">
              <img className="header__links-accountpic" alt="schematic human" src={account} />
            </div>
          </a>
        </div>
      </header>
    );
  }
}
export default HeaderMovies;
