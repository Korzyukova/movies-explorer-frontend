import React from 'react';
import arrow from '../../images/arrow.png';

class Portfolio extends React.Component {
  render() {
    return (
      <section className="portfolio">
        <div className="portfolio__container">
          <p className="portfolio__container-header">Portfolio</p>
          <ul className="portfolio__container-list">
            <li>
              <a className="portfolio__container-site-arrow" href="https://korzyukova.github.io/how-to-learn" target="_blank" rel="noreferrer">
                <p className="portfolio__container-site">Static site</p>
                <img className="portfolio__container-arrow" alt="arrow" src={arrow} />
              </a>

              <div className="portfolio__container-line" />
            </li>
            <li>
              <a className="portfolio__container-site-arrow" href="https://korzyukova.github.io/russian-travel/" target="_blank" rel="noreferrer">
                <p className="portfolio__container-site">Adaptive site</p>
                <img className="portfolio__container-arrow" alt="arrow" src={arrow} />
              </a>

              <div className="portfolio__container-line" />
            </li>
            <li>
              <a className="portfolio__container-site-arrow" href="https://korzyukova.github.io/mesto/" target="_blank" rel="noreferrer">
                <p className="portfolio__container-site">Single page application (SPA)</p>
                <img className="portfolio__container-arrow" alt="arrow" src={arrow} />
              </a>
            </li>
          </ul>

        </div>
      </section>
    );
  }
}
export default Portfolio;
