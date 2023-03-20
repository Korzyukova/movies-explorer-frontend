import React from 'react';

class Techs extends React.Component {
  render() {
    return (
      <section className="techs" id="techs">
        <div className="techs__container">
          <p className="techs__container-name">Technologies</p>
          <div className="techs__container-line" />
          <p className="techs__container-head">7 technologies</p>
          <p className="techs__container-text">My tech stack.</p>
          <div className="techs__container-grid-wrap">
            <ul className="techs__container-grid">
              <li className="techs__container-grid-element">HTML</li>
              <li className="techs__container-grid-element">CSS</li>
              <li className="techs__container-grid-element">JS</li>
              <li className="techs__container-grid-element">React</li>
              <li className="techs__container-grid-element">Git</li>
              <li className="techs__container-grid-element">Express.js</li>
              <li className="techs__container-grid-element">mongoDB</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}
export default Techs;
