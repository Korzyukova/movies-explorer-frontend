import React from 'react';

import './App.css';
import { Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Profile from './pages/Profile';
import Movies from './pages/Movies';
import SavedMovies from './pages/SavedMovies';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Preloader from './components/Preloader';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/movies" element={<Movies />} />
        <Route exact path="/saved-movies" element={<SavedMovies />} />
        <Route exact path="*" element={<NotFound />} />
        <Route exact path="/preloader" element={<Preloader />} />
      </Routes>
    </div>
  );
}

export default App;
