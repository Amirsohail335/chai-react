// ImageCardComponent.jsx
import React, { useState } from "react";
import "./ImageCardComponent.css"; // Import your CSS file

const ImageCardComponent = ({ imageUrl, title, description }) => {
  const [isEditVisible, setIsEditVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsEditVisible(true);
  };

  const handleMouseLeave = () => {
    setIsEditVisible(false);
  };

  return (
    <div
      className="image-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        {isEditVisible && (
          <button
            className="edit-button"
            onClick={() => console.log("Edit clicked")}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default ImageCardComponent;
