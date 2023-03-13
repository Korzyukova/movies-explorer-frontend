import React from 'react';
import Header from '../components/Header';

class Profile extends React.Component {
  render() {
    return (
      <>
        <Header user />
        <div className="profile">

          <div className="profile__container">
            <h1 className="profile_header">Hello,Tatiana!</h1>

            <div className="profile__data profile__data-name">
              <p>Name</p>
              <p>Tatiana</p>
            </div>
            <div className="profile__data">
              <p>E-mail</p>
              <p>pochta@google.com</p>
            </div>

            <div className="profile__bottom">
              <p className="profile__bottom-text">Update profile</p>
              <a className="profile__bottom-link" href="/">Sign Out</a>
            </div>
          </div>
        </div>

      </>
    );
  }
}

export default Profile;
