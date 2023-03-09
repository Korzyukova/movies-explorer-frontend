import React from 'react';

import '../App.css';
import SearchForm from '../components/Movies/SearchForm';
import MoviesCardList from '../components/Movies/MoviesCardList';
import HeaderMovies from '../components/Movies/HeaderMovies';
import Footer from '../components/Footer';

function Movies() {
  return (
    <div className="movies">
      <HeaderMovies links={['/movies', '/saved-movies', '/profile', '/']} />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </div>
  );
}

export default Movies;
