import React from 'react';
import Promo from '../components/Main/Promo';
import Navigation from '../components/Navigation';
import AboutProject from '../components/Main/AboutProject';
import '../App.css';
import Techs from '../components/Main/Techs';
import AboutMe from '../components/Main/AboutMe';
import Portfolio from '../components/Main/Portfolio';

function Home() {
  return (
    <div>
      <Promo />
      <Navigation links={{
        link1: '#about',
        link2: '#techs',
        link3: '#aboutme',
      }}
      />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </div>
  );
}

export default Home;
