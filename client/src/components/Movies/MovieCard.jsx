import React from 'react';
import like from '../../images/like.png';

class movieCard extends React.Component {
  movie;

  constructor(props) {
    super(props);
    this.movie = props.movie;
  }

  render() {
    return (

      <li>
        <img
          className="photo-grid__item"
          src={this.movie.img}
          alt={this.movie.alt}
        />
        <div className="photo-grid__bottom">
          <h2 className="photo-grid__name">{this.movie.title}</h2>
          <div className="photo-grid__likeme">
            <button className="photo-grid__likeme_button" type="submit">
              <img className="photo-grid__likeme_heart" src={like} alt="heart" />
            </button>
            {/* <span className="photo-grid__likes" /> */}
          </div>
        </div>
        <p className="photo-grid__bottom-time">{this.movie.length}</p>
      </li>

    );
  }
}
export default movieCard;
