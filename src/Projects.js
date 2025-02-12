import React from 'react';
import ProjectGallery from './ProjectGallery';

function Projects() {
    return (
        <section id='projects-section' className='content-card'>
            <h1>Projects</h1>
            <p>
                My portfolio showcases a diverse range of projects that highlight my skills in web development and software design. Each project reflects my commitment to learning and my ability to solve complex problems through innovative solutions. Explore my work to see how I bring ideas to life through code.
            </p>
            <ProjectGallery />
        </section> 
    );
};

export default Projects;