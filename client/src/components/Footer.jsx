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
            <div className="footer__container_links">
              <a className="footer__container_links-yandex" href="https://practicum.yandex.ru">Yandex.Practicum</a>
              <a className="footer__container_links-github" href="https://github.com/Korzyukova">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
