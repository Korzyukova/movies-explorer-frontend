import React from 'react';

import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Profile from './pages/Profile';
import Movies from './pages/Movies';
import SavedMovies from './pages/SavedMovies';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/movies" element={<Movies />} />
        <Route exact path="/saved-movies" element={<SavedMovies />} />
      </Routes>
    </div>
  );
}

export default App;
