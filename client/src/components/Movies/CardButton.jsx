import React from 'react';
import cross from '../../images/cross.png';
import like from '../../images/like.png';
import nolike from '../../images/nolike.png';

class CardButton extends React.Component {
  savedMovies;

  liked;

  constructor(props) {
    super(props);
    this.savedMovies = props.savedMovies;
    this.liked = props.liked;
  }

  render() {
    return (
      this.savedMovies ? (
        <span className="photo-grid__likeme-button">
          <img className="photo-grid__likeme-heart" src={cross} alt="heart" />
        </span>
      ) : (
        <span className="photo-grid__likeme-button">
          <img className="photo-grid__likeme-heart" src={this.liked ? like : nolike} alt="heart" />
        </span>
      )

    );
  }
}
export default CardButton;
