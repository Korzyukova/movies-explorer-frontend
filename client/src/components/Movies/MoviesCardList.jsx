import React from 'react';
import wolf from '../../images/wolf.jpg';

class MoviesCardList extends React.Component {
  render() {
    return (
      <div className="moviescardlist">
        <div className="moviescardlist__container">
          <ul className="photo-grid">
            <li>
              <img
                className="photo-grid__item"
                src={wolf}
                alt="Вид из окна поезда"
              />
            </li>
            <li>
              <img
                className="photo-grid__item"
                src={wolf}
                alt="Горы в снегу и облаках"
              />
            </li>
            <li>
              <img
                className="photo-grid__item"
                src={wolf}
                alt="Волк на камне на закате"
              />
            </li>
            <li>
              <img
                className="photo-grid__item"
                src={wolf}
                alt="Горный лес в тумане в Сочи"
              />
            </li>
            <li>
              <img
                className="photo-grid__item"
                src={wolf}
                alt="Машина на льду"
              />
            </li>
            <li>
              <img
                className="photo-grid__item"
                src={wolf}
                alt="Берег Байкала и горы"
              />
            </li>
            <li>
              <img
                className="photo-grid__item"
                src={wolf}
                alt="Пик Эльбруса"
              />
            </li>
            <li>
              <img
                className="photo-grid__item"
                src={wolf}
                alt="Белые волнорезы"
              />
            </li>
            <li>
              <img
                className="photo-grid__item"
                src={wolf}
                alt="Камчатка вид с вертолета"
              />
            </li>
            <li>
              <img
                className="photo-grid__item"
                src={wolf}
                alt="Гора на Камчатке"
              />
            </li>
            <li>
              <img
                className="photo-grid__item"
                src={wolf}
                alt="Берег Байкала и скалы"
              />
            </li>
            <li>
              <img
                className="photo-grid__item"
                src={wolf}
                alt="Сибирский заповедник Ергаки в тумане"
              />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default MoviesCardList;
