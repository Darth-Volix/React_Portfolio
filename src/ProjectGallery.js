import React, { useState } from "react";

const images = [
  "https://via.placeholder.com/600x400/FF5733/FFFFFF?text=Image+1",
  "https://via.placeholder.com/600x400/33FF57/FFFFFF?text=Image+2",
  "https://via.placeholder.com/600x400/3357FF/FFFFFF?text=Image+3",
  "https://via.placeholder.com/600x400/FF33A1/FFFFFF?text=Image+4",
  "https://via.placeholder.com/600x400/FFA133/FFFFFF?text=Image+5",
];

function ProjectGallery() {
  const [selectedProject, setSelectedProject] = useState(images[0]);

  const nextImage = () => {
    const currentIndex = images.indexOf(selectedProject);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedProject(images[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = images.indexOf(selectedProject);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedProject(images[prevIndex]);
  };

  return (
    <div>
      <div>
        <button 
          onClick={prevImage} 
        >
          Previous
        </button>
        <img 
          src={selectedProject} 
          alt="Gallery" 
        />
        <button 
          onClick={nextImage} 
        >
          Next
        </button>
      </div>
      <div>
        {images.map((img, index) => (
          <img 
            key={index} 
            src={img} 
            alt={`Thumbnail ${index + 1}`} 
            onClick={() => setSelectedProject(img)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;