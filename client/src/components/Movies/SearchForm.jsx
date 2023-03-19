import React from 'react';
import find from '../../images/find.png';
import tumbler from '../../images/smalltumb.png';
import tumbleroff from '../../images/tumbler-off.png';

class SearchForm extends React.Component {
  constructor() {
    super();
    this.state = {
      tumblerIsOpen: false,
    };
  }

  render() {
    const { tumblerIsOpen } = this.state;
    const onClick = () => {
      this.setState({
        tumblerIsOpen: !tumblerIsOpen,
      });
    };
    return (
      <section className="searchform">
        <div className="searchform__container">
          <form className="searchform__container_bar">
            <input
              className="searchform__container_bar-input"
              type="search"
              id="search"
              name="search"
              placeholder="Movie"
              autoComplete="off"
              required
            />
            <button className="searchform__container_bar-button" type="submit">
              <img className="searchform__container_bar-pic" src={find} alt="magnifying glass" />
            </button>
          </form>
          <div className="searchform__container_short">
            <p className="searchform__container_short-sigh">Short films</p>
            <button className="searchform__container_button" type="button" onClick={onClick}>
              { tumblerIsOpen
                ? (
                  <img className="searchform__container_tumbler" src={tumbler} alt="tumbler on" />
                )
                : (
                  <img className="searchform__container_tumbler" src={tumbleroff} alt="tumbler off" />
                )}
            </button>
          </div>
        </div>
      </section>
    );
  }
}
export default SearchForm;
