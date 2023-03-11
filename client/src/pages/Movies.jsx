import React from 'react';

import '../App.css';
import SearchForm from '../components/Movies/SearchForm';
import MoviesCardList from '../components/Movies/MoviesCardList';
import HeaderMovies from '../components/Movies/HeaderMovies';
import Footer from '../components/Footer';
import More from '../components/Movies/More';

function Movies() {
  return (
    <div className="movies">
      <HeaderMovies links={['/movies', '/saved-movies', '/profile', '/']} />
      <SearchForm />
      <MoviesCardList />
      <More />
      <Footer />
    </div>
  );
}

export default Movies;
