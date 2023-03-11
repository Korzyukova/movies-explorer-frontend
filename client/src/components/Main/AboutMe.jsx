import React from 'react';
import cat from '../../images/cat.jpg';

class AboutMe extends React.Component {
  render() {
    return (
      <div className="aboutme" id="aboutme">
        <div className="aboutme__container">
          <p className="aboutme__container_name">Student</p>
          <div className="aboutme__container_line" />

          <div className="aboutme__container_description">
            <div className="aboutme__container_description-column">
              <p className="aboutme__container_description-name">Tatiana Korzyukova</p>
              <p className="aboutme__container_description-profession">Web developer, NY, NY.</p>
              <p className="aboutme__container_description-story">
                I am a software engineer with a passion for frontend technologies.
                I transitioned into software engineering because I wanted to use
                my mathematic skills and education to solve real world problems.
                I tend to focus my efforts on delivering code that is clean and user focused.
                A bit more about me:
                <ul>
                  <li>I am eager to learn (I like jumping into new territory)</li>
                  <li>
                    Integrity, creativity, curiosity and grit are some of my key
                    attributes I am most proud of. Off the clock, I enjoy reading,
                    hiking and traveling, learning languages (English, Bulgarian, Spanish).
                    I have also been
                    interested in marine biology since I was a teenager.
                  </li>
                </ul>
              </p>
              <a className="aboutme__container_description-github" href="https://github.com/Korzyukova">Github</a>
            </div>
            <img className="aboutme__container_description-avatar" alt="cat" src={cat} />
          </div>
        </div>
      </div>
    );
  }
}
export default AboutMe;
