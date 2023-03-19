import React from 'react';

class NotFound extends React.Component {
  render() {
    return (

      <section className="notfound">
        <p className="notfound_digit">404</p>
        <p className="notfound_sign">Page not found</p>
        <a className="notfound_link" href="/">Back</a>
      </section>

    );
  }
}

export default NotFound;
