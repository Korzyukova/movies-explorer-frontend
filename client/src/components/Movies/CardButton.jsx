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
        <button className="photo-grid__likeme_button" type="submit">
          <img className="photo-grid__likeme_heart" src={cross} alt="heart" />
        </button>
      ) : (
        <button className="photo-grid__likeme_button" type="submit">
          <img className="photo-grid__likeme_heart" src={this.liked ? like : nolike} alt="heart" />
        </button>
      )

    );
  }
}
export default CardButton;
