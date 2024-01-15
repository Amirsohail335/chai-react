// ImageCardComponent.jsx
import React from 'react';
import './ImageCardComponent.css'; // Import your CSS file

const ImageCardComponent = ({ imageUrl, title, description, onEditClick }) => {
  return (
    <div className="image-card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <button className="edit-button" onClick={onEditClick}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default ImageCardComponent;
