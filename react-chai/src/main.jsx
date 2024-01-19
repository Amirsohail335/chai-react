import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ImageHeadingTitleComponent from "./components/ImageCardComponent.jsx";
import TableComponent from "./components/TableComponent/TableComponent.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <ImageHeadingTitleComponent />/ */}
    <TableComponent/>
  </React.StrictMode>
);
