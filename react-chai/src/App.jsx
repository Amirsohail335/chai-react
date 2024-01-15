// App.jsx
import React from "react";
import ImageCardComponent from "./components/ImageCardComponent"; // Adjust the import path based on your project structure

const App = () => {
  const imageCardsData = [
    {
      imageUrl:
        "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg",
      title: "Card 1",
      description: "Description for Card 1",
    },
    {
      imageUrl: "https://example.com/image2.jpg",
      title: "Card 2",
      description: "Description for Card 2",
    },
    // Add more image card data as needed
  ];

  const handleEditClick = (cardIndex) => {
    // Implement your edit logic using the card index or card data
    console.log("Edit clicked for card at index:", cardIndex);
  };

  return (
    <div>
      {imageCardsData.map((card, index) => (
        <ImageCardComponent
          key={index}
          imageUrl={card.imageUrl}
          title={card.title}
          description={card.description}
          onEditClick={() => handleEditClick(index)}
        />
      ))}
    </div>
  );
};

export default App;
