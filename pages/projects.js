import Head from "next/head";
import SiteLayout from "../components/SiteLayout/SiteLayout";
import Nav from "../components/Nav/Nav";
import Construction from "../components/Construction/Construction";
import styles from "../styles/Projects.module.css";

export default function Projects() {
  const projects = [
    {
      name: "Walut",
      description: "",
      category: "iOS App",
      state: "Published",
      link: "https://github.com/mbdjj/Walut",
    },
    {
      name: "Walut",
      description: "",
      category: "iOS App",
      state: "Published",
      link: "https://github.com/mbdjj/Walut",
    },
  ];

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

        {projects.map((project, index) => {
          return (
            <div key={index}>
              <h2>{projects[0].name}</h2>
              <p>{projects[0].category}</p>
              <p>{projects[0].state}</p>
            </div>
          );
        })}

        <Construction />
      </SiteLayout>
    </>
  );
}
