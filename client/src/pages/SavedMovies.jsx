import React from 'react';

import '../App.css';
import SearchForm from '../components/Movies/SearchForm';
import MoviesCardList from '../components/Movies/MoviesCardList';
import Footer from '../components/Footer';
import Header from '../components/Header';

function SavedMovies() {
  return (
    <main className="movies">
      <Header user />
      <SearchForm />
      <MoviesCardList savedMovies />
      <Footer />
    </main>
  );
}

export default SavedMovies;
