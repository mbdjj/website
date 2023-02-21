import Head from "next/head";
import SiteLayout from "../components/SiteLayout/SiteLayout";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import Construction from "../components/Construction/Construction";
import styles from "../styles/Links.module.css";

export default function Links() {
  return (
    <>
      <Head>
      <title>Links</title>
        <meta name="description" content="Links to all my social media platforms." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <SiteLayout>
        <Nav selectedItem="links" />
        <div className="line"></div>

        <Construction />

        <div className="line"></div>
        <Footer />
      </SiteLayout>
    </>
  );
}