import React from 'react';

import '../App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Movies from './Movies';

function Main() {
  const links = [
    '/signup',
    '/signin',
    '/',
  ];
  return (
    <div className="App">
      <Header links={links} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/movies" element={<Movies />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Main;
