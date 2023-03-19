import React from 'react';
import CardButton from './CardButton';

class movieCard extends React.Component {
  constructor(props) {
    super(props);
    this.movie = props.movie;
    this.liked = props.liked;
    this.savedMovies = props.savedMovies;
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
          <button className="photo-grid__likeme" type="button">
            <CardButton liked={this.liked} savedMovies={this.savedMovies} />
          </button>
        </div>
        <p className="photo-grid__bottom-time">{this.movie.length}</p>
      </li>

    );
  }
}
export default movieCard;
