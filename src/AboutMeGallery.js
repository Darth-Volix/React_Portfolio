import React, { useState } from 'react';

function AboutMeGallery() {
  const [selectedText, setSelectedText] = useState(null);

  const texts = [
    { id: 1, title: 'Education', content: "I am currently pursuing a Bachelor of Science degree in Software Engineering at Brigham Young University - Idaho, nestled in the charming town of Rexburg, Idaho. With a dual focus on Software Design and Full Stack Web Development, I've been honing my skills and preparing for a dynamic career in the tech world. As a Senior, I am proud to maintain a perfect 4.0 GPA, reflecting my dedication and passion for this field. Based on my current progress and the coursework ahead, I anticipate graduating in April 2026. Before my time at BYU-I, I earned an Associate Degree with High Honors in University Studies from Utah Valley University in May 2023, where I also maintained a 4.0 GPA."},
    { id: 2, title: 'Accomplishments', content: "I take great pride in my hard work and strong work ethic, which have led to a variety of accomplishments—some more impressive than others. Here, I'd like to highlight the ones I'm particularly proud of. At the age of 13, I earned my Eagle Scout and set a new record in my troop for the fastest achievement. My passion for engineering blossomed during high school, where I won the 2018 Utah Technology Student Association competition and had the honor of representing Utah at the national level. More recently, I was awarded a full tuition scholarship from BYU-I, which I've been able to maintain thanks to my dedication to academic excellence. As I continue to grow and achieve, I'll make sure to update this page with my latest accolades." }
  ];

  const handleClick = (text) => {
    setSelectedText(text);
  };

  return (
    <div>
      <div>
        {texts.map((text) => (
          <div key={text.id} onClick={() => handleClick(text)}>
            {text.title}
          </div>
        ))}
      </div>
      {selectedText && (
        <div>
          <h2>{selectedText.title}</h2>
          <p>{selectedText.content}</p>
        </div>
      )}
    </div>
  );
};

export default AboutMeGallery;