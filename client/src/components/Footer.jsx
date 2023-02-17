/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__container">
          <p className="footer__container_copyright">Yandex.Practicum х BeatFilm.</p>
          <div className="footer__container_copyright-line" />
          <div className="footer__container_copyright-bottom">
            <p>&copy; 2020</p>
            <p>Yandex.Practicum  Github</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
