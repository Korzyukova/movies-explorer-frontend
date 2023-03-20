/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__container">
          <p className="footer__container-copyright">Yandex.Practicum х BeatFilm.</p>
          <div className="footer__container-copyright-line" />
          <div className="footer__container-copyright-bottom">
            <p>&copy; 2020</p>
            <div className="footer__container-links">
              <a className="footer__container-links-yandex" href="https://practicum.yandex.ru" target="_blank" rel="noreferrer">Yandex.Practicum</a>
              <a className="footer__container-links-github" href="https://github.com/Korzyukova" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
