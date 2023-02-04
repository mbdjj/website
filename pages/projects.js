import Head from "next/head";
import SiteLayout from "../components/SiteLayout/SiteLayout";
import Nav from "../components/Nav/Nav";
import Construction from "../components/Construction/Construction";

export default function Projects() {
  return (
    <>
      <Head>
      <title>Projects</title>
        <meta name="description" content="My personal portfolio website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <SiteLayout>
        <Nav selectedItem="projects" />
        <div className="line"></div>

        <Construction />
      </SiteLayout>
    </>
  );
}