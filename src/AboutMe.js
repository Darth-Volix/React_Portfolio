import React from 'react';
import AboutMeGallery from './AboutMeGallery';

const AboutMe = () => {
    return (
        <div>
            <h1>About Me</h1>
            <p>
                Hello! I'm Nicholas Wilkins. Born and bred in the heart of Salt Lake City, Utah, I had the unique experience of growing up as the third of eight siblings. My journey has since led me to Rexburg, Idaho, where my wife and I have called home for nearly four wonderful years.

                In June 2024, we welcomed our little bundle of joy, Archer, who has brought an endless supply of sunshine into our lives. Currently, I'm pursuing my passion for technology as a software engineering major at BYU-I.

                When I'm not immersed in coding, you can find me fervently cheering for my favorite football teams, indulging in epic Star Wars marathons, diving into the latest tech trends, or passionately singing along to Taylor Swift's hits—yes, I'm a proud Swiftie!

                To learn more about my education and accomplishments, choose one of the options below!
            </p>
            <AboutMeGallery />
        </div>
    );
};

export default AboutMe;