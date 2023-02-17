import React from 'react';

class AboutProject extends React.Component {
  render() {
    return (
      <div className="about">
        <div className="about__container">
          <p className="about__container_name">About this project</p>
          <div className="about__container_line" />
          <div className="about__container_description">
            <div>
              <p className="about__container_description-top">This project included 5 stages</p>
              <p className="about__container_description-bottom">Creating a plan, working on the backend, layout, adding functionality and final improvements.</p>
            </div>
            <div>
              <p className="about__container_description-top">It took 5 weeks to complete this project</p>
              <p className="about__container_description-bottom">Each stage had a soft and hard deadline.</p>
            </div>
          </div>
          <div className="about__container_weekline">
            <div>
              <div className="about__container_weekline-one">1 week</div>
              <p className="about__container_weekline_sign">Back-end</p>
            </div>
            <div>
              <div className="about__container_weekline-second">4 weeks</div>
              <p className="about__container_weekline_sign">Front-end</p>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default AboutProject;
