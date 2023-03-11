import React from 'react';
import arrow from '../../images/arrow.png';

class Portfolio extends React.Component {
  render() {
    return (
      <div className="portfolio">
        <div className="portfolio__container">
          <p className="portfolio__container_header">Portfolio</p>

          <a className="portfolio__container_site-arrow" href="https://korzyukova.github.io/how-to-learn">
            <p className="portfolio__container_site">Static site</p>
            <img className="portfolio__container_arrow" alt="arrow" src={arrow} />
          </a>

          <div className="portfolio__container_line" />

          <a className="portfolio__container_site-arrow" href="https://korzyukova.github.io/russian-travel/">
            <p className="portfolio__container_site">Adaptive site</p>
            <img className="portfolio__container_arrow" alt="arrow" src={arrow} />
          </a>

          <div className="portfolio__container_line" />

          <a className="portfolio__container_site-arrow" href="https://korzyukova.github.io/mesto/">
            <p className="portfolio__container_site">Single page application (SPA)</p>
            <img className="portfolio__container_arrow" alt="arrow" src={arrow} />
          </a>

        </div>
      </div>
    );
  }
}
export default Portfolio;
