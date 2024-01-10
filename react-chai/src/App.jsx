import { useState } from "react";

// function App() {
//   return <h1>chai aur code 5</h1>;
// }

// export default App;
import React from 'react';
import ImageHeadingTitleComponent from './components/ImageHeadingTitle';

const App = () => {
  return (
    <div>
      <ImageHeadingTitleComponent
        imageUrl="https://example.com/your-image.jpg"
        heading="Welcome to React Components"
        title="Building awesome components with ease!"
      />
    </div>
  );
};

export default App;

