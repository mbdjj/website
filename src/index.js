import React from "react";
import ReactDOM from "react-dom/client";

import NavBar from "./components/navbar/NavBar";
import Container from "./components/main-page/Container";
import Footer from "./components/footer/Footer";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Container />
      <h2 style={{marginTop: "auto"}}>Pinned GitHub projects</h2>
      <Projects />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
