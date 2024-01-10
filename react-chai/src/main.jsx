import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ImageHeadingTitleComponent from "./components/ImageHeadingTitle.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <ImageHeadingTitleComponent/>
  </React.StrictMode>
);
