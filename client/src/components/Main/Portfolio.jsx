import React from 'react';
import arrow from '../../images/arrow.png';

class Portfolio extends React.Component {
  render() {
    return (
      <div className="portfolio">
        <div className="portfolio__container">
          <p className="portfolio__container_header">Portfolio</p>

          <div className="portfolio__container_site-arrow">
            <p className="portfolio__container_site">Static site</p>
            <img className="portfolio__container_arrow" alt="arrow" src={arrow} />
          </div>

          <div className="portfolio__container_line" />

          <div className="portfolio__container_site-arrow">
            <p className="portfolio__container_site">Adaptive site</p>
            <img className="portfolio__container_arrow" alt="arrow" src={arrow} />
          </div>

          <div className="portfolio__container_line" />

          <div className="portfolio__container_site-arrow">
            <p className="portfolio__container_site">Single page application (SPA)</p>
            <img className="portfolio__container_arrow" alt="arrow" src={arrow} />
          </div>

        </div>
      </div>
    );
  }
}
export default Portfolio;
