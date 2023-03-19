/* eslint-disable react/prop-types */
import React from 'react';

class Navigation extends React.Component {
  links;

  constructor(props) {
    super(props);
    this.links = props.links;
  }

  render() {
    return (
      <section className="navigation">
        <div className="navigation__links">
          <a className="navigation__link" href={this.links.link1}>About</a>
          <a className="navigation__link" href={this.links.link2}>Technologies</a>
          <a className="navigation__link" href={this.links.link3}>Student</a>
        </div>
      </section>
    );
  }
}
export default Navigation;
