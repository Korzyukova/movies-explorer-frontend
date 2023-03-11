import React from 'react';
import find from '../../images/find.png';
import tumbler from '../../images/smalltumb.png';

class SearchForm extends React.Component {
  render() {
    return (
      <div className="searchform">
        <div className="searchform__container">
          <form className="searchform__container_bar">
            <input
              className="searchform__container_bar-input"
              type="search"
              id="search"
              name="search"
              placeholder="Movie"
              autoComplete="off"
            />
            <button className="searchform__container_bar-button" type="submit">
              <img className="searchform__container_bar-pic" src={find} alt="magnifying glass" />
            </button>
          </form>
          <div className="searchform__container_short">
            <p className="searchform__container_short-sigh">Short films</p>
            <img className="searchform__container_tumbler" src={tumbler} alt="tumbler on" />
          </div>
        </div>
      </div>
    );
  }
}
export default SearchForm;
