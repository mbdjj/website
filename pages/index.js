import NavBar from "../components/navbar/NavBar";
import Container from "../components/main-page/Container";
import Footer from "../components/footer/Footer";
import Projects from "../components/projects/Projects";
import Head from "next/head";

export default function App() {
  return (
    <div className="app">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Marcin Bartmiński</title>
      </Head>
      <NavBar />
      <Container />
      <h2 style={{ marginTop: "auto" }}>Pinned GitHub projects</h2>
      <Projects />
      <Footer />
    </div>
  );
}
