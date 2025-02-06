import React, { useState } from "react";
import ChronoPlan from './images/ChronoPlan.png';
import GlacierSite from './images/glacier_site.png';
import NoteTaker from './images/typescript_notetaker.png';

const projects = [
  {title: 'ChronoPlan', image: ChronoPlan, content: "Chronoplan is a website that allows a user to track and add goals and events to the calendar via local storage. It also uses an API that enables the user to choose which country's holidays they would like to have displayed on their calendar. Everything for this website was written with vanilla HTML/CSS/JavaScript."},
  {title: 'Glacier NPS Copycat Site', image: GlacierSite, content: "To learn how to use APIs and more advanced vanilla JS, I created a website that very closely mirrors the real website for Glacier National Park, even using the official NPS API. Everything for this website was written with vanilla HTML/CSS/JavaScript."},
  {title: 'TypeScript Notes App', image: NoteTaker, content: "This application was one created to help me learn TypeScript. It is completely terminal based and allows a user to create, edit, and organize notes into folders. The principles of OOP were implemented in this program and the code is open to the public on GitHub."}
];

function ProjectGallery() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  function nextImage() {
    const currentIndex = projects.indexOf(selectedProject);
    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedProject(projects[nextIndex]);
  };

  function prevImage() {
    const currentIndex = projects.indexOf(selectedProject);
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setSelectedProject(projects[prevIndex]);
  };

  return (
    <div>
      <button onClick={prevImage}>Previous</button>
      <button onClick={nextImage}>Next</button>
      <div>
        <h3>{selectedProject.title}</h3>
        <img src={selectedProject.image} alt={selectedProject.title} />
        <p>{selectedProject.content}</p>
      </div>
    </div>
  );
  
};

export default ProjectGallery;