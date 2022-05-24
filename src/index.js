import React from "react";
import ReactDOM from "react-dom/client";

import Container from "./components/Container";

function App() {
  return <Container />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
