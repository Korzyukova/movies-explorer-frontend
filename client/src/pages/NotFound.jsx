import React from 'react';

class NotFound extends React.Component {
  render() {
    return (

      <div className="notfound">
        <p className="notfound_digit">404</p>
        <p className="notfound_sign">Page not found</p>
        <a className="notfound_link" href="/">Back</a>
      </div>

    );
  }
}

export default NotFound;
