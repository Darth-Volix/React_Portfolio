import React from 'react';
import Navigation from './Navigation';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Footer from './Footer';
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
      <Footer />
    </main>
  );
};

export default App;