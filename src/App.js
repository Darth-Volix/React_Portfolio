import React from 'react';
import Navigation from './Navigation';
import AboutMe from './AboutMe';
import Projects from './Projects';
import './App.css';

function App() {
  return (
    <main>
      <header>
        <Navigation />
      </header>
      <AboutMe />
      <Projects />
    </main>
  );
}

export default App;