import React from 'react';
import promologo from '../../images/promologo.png';

class Promo extends React.Component {
  render() {
    return (
      <div className="promo">
        <p className="promo__text">My final project from Yandex.Practicum web development bootcamp.</p>
        <img className="promo__logo" alt="planet Earth" src={promologo} />
      </div>
    );
  }
}

export default Promo;
