import Head from "next/head";
import SiteLayout from "../components/SiteLayout/SiteLayout";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import Construction from "../components/Construction/Construction";
import styles from "../styles/Experience.module.css";

export default function Experience() {
  return (
    <>
      <Head>
        <title>Experience</title>
        <meta name="description" content="My experience and places I worked in." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <SiteLayout>
        <Nav selectedItem="experience" />
        <div className="line"></div>

        <Construction />

        <div className="line"></div>
        <Footer />
      </SiteLayout>
    </>
  );
}
