import React from "react";
import ReactDOM from "react-dom/client";

import NavBar from "./components/navbar/NavBar";
import Container from "./components/Container";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Container />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
