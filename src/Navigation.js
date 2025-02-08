import React from 'react';

function Navigation() {
    return (
        <nav id='navigation-bar'>
           <h1 id="portfolio_owner_title">Nicholas Wilkins</h1>
           <ul id='nav-links' >
                <li>
                <a className='nav-link-button' href="#about-me-card">Who Am I?</a>
                </li>
                <li>
                <a className='nav-link-button' href="#skills-section">Skills & Technologies</a>
                </li>
                <li>
                <a className='nav-link-button' href="#projects-section">Projects</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;