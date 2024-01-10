import React from 'react';

const ImageHeadingTitleComponent = ({ imageUrl, heading, title }) => {
    const imageUrl='./assets/react.svg'
  return (
    <div className="image-heading-title">
      <img src={imageUrl} alt={title} />
      <h2>{heading}</h2>
      <p>{title}</p>
    </div>
  );
};

export default ImageHeadingTitleComponent;