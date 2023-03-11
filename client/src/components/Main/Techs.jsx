import React from 'react';

class Techs extends React.Component {
  render() {
    return (
      <div className="techs" id="techs">
        <div className="techs__container">
          <p className="techs__container_name">Technologies</p>
          <div className="techs__container_line" />
          <p className="techs__container_head">7 technologies</p>
          <p className="techs__container_text">My tech stack.</p>
          <ul className="techs__container_grid">
            <li className="techs__container_grid-element">HTML</li>
            <li className="techs__container_grid-element">CSS</li>
            <li className="techs__container_grid-element">JS</li>
            <li className="techs__container_grid-element">React</li>
            <li className="techs__container_grid-element">Git</li>
            <li className="techs__container_grid-element">Express.js</li>
            <li className="techs__container_grid-element">mongoDB</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Techs;
