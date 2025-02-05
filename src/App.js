import React from 'react';
import Navigation from './Navigation';
import AboutMe from './AboutMe';
import Projects from './Projects';
import './App.css';
import HeadShot from './images/personal_headshot.jpg';

function App() {
  return (
    <main>
      <header>
        <Navigation />
      </header>
      <AboutMe src={HeadShot}/>
      <Projects />
    </main>
  );
};

export default App;