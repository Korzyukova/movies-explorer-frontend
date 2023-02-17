import React from 'react';

import '../App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Main() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Main;
