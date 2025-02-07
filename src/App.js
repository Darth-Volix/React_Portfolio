import React from 'react';
import Navigation from './Navigation';
import AboutMe from './AboutMe';
import SkillsSection from './SkillsSection'; 
import Projects from './Projects';
import Footer from './Footer';
import './App.css';
import HeadShot from './images/personal_headshot.jpg';

function App() {
  return (
    <main>
      <Navigation />
      <section id="main-content">
        <AboutMe src={HeadShot} />
        <SkillsSection />
        <Projects />
      </section>
      <Footer />
    </main>
  );
};

export default App;