import React from 'react';

class AboutProject extends React.Component {
  render() {
    return (
      <section className="about" id="about">
        <div className="about__container">
          <p className="about__container-name">About this project</p>
          <div className="about__container-line" />
          <div className="about__container-description">
            <div>
              <p className="about__container-description-top">This project included 5 stages</p>
              <p className="about__container-description-bottom">Creating a plan, working on the backend, layout, adding functionality and final improvements.</p>
            </div>
            <div>
              <p className="about__container-description-top">It took 5 weeks to complete this project</p>
              <p className="about__container-description-bottom">Each stage had a soft and hard deadline.</p>
            </div>
          </div>
          <div className="about__container-weekline">
            <div>
              <div className="about__container-weekline-one">1 week</div>
              <p className="about__container-weekline-sign">Back-end</p>
            </div>
            <div>
              <div className="about__container-weekline-second">4 weeks</div>
              <p className="about__container-weekline-sign">Front-end</p>
            </div>
          </div>

        </div>
      </section>
    );
  }
}

export default AboutProject;
