import React from 'react';
import wolf from '../../images/wolf.jpg';
import MovieCard from './MovieCard';

class MoviesCardList extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  createPlaceholders() {
    const movieArrPlaceholder = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 52; i++) {
      movieArrPlaceholder.push({
        img: wolf,
        title: 'Wolf on a rock',
        length: `2h ${Math.floor(Math.random() * 60)}min`,
      });
    }
    return movieArrPlaceholder;
  }

  render() {
    return (
      <div className="moviescardlist">
        <div className="moviescardlist__container">
          <ul className="photo-grid">
            {this.createPlaceholders().map((movie) => <MovieCard movie={movie} />)}
          </ul>
        </div>
      </div>
    );
  }
}
export default MoviesCardList;
