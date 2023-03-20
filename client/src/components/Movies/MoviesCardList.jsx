import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import wolf from '../../images/wolf.jpg';
import MovieCard from './MovieCard';

class MoviesCardList extends React.Component {
  constructor(props) {
    super(props);
    this.savedMovies = props.savedMovies;
  }

  // eslint-disable-next-line class-methods-use-this
  createPlaceholders() {
    const movieArrPlaceholder = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 12; i++) {
      const mins = Math.floor(Math.random() * 60);
      movieArrPlaceholder.push({
        img: wolf,
        title: 'Wolf on a rock',
        length: `2h ${mins}min`,
        liked: mins % 2 === 0,
      });
    }
    return movieArrPlaceholder;
  }

  render() {
    return (
      <div className="moviescardlist">
        <div className="moviescardlist__container">
          <ul className="photo-grid">
            {this.createPlaceholders()
              .map((movie) => (
                <MovieCard
                  movie={movie}
                  liked={movie.liked}
                  savedMovies={this.savedMovies}
                  key={uuidv4()}
                />
              ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default MoviesCardList;
