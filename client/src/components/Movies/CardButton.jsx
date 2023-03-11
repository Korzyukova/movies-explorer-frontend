import React from 'react';
import cross from '../../images/cross.png';

class CardButton extends React.Component {
  render() {
    return (

      <button className="photo-grid__likeme_button" type="submit">
        <img className="photo-grid__likeme_heart" src={cross} alt="heart" />
      </button>

    );
  }
}
export default CardButton;
