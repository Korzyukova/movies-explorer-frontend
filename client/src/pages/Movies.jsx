import React from 'react';

import '../App.css';
import SearchForm from '../components/Movies/SearchForm';
import MoviesCardList from '../components/Movies/MoviesCardList';
import Footer from '../components/Footer';
import More from '../components/Movies/More';
import Header from '../components/Header';

function Movies() {
  return (
    <main className="movies">
      <Header user />
      <SearchForm />
      <MoviesCardList />
      <More />
      <Footer />
    </main>
  );
}

export default Movies;
