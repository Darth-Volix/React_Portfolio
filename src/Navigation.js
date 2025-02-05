import React from 'react';

const Navigation = () => {
    return (
        <nav id='navigation-bar'>
           <h1 id="portfolio_owner_title">Nicholas Wilkins</h1>
           <ul id='nav-links' >
                <li>
                <a href="/about">About Me</a>
                </li>
                <li>
                <a href="/skills">Skills & Technologies</a>
                </li>
                <li>
                <a href="/projects">Projects</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;