import Head from "next/head";
import SiteLayout from "../components/SiteLayout/SiteLayout";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import Construction from "../components/Construction/Construction";
import styles from "../styles/Projects.module.css";

import Link from "next/link";
import Image from "next/image";

import walutImg from "../public/images/screenshots/walut.png";
import websiteImg from "../public/images/screenshots/website.png";

export default function Projects() {
  const projects = [
    {
      name: "Walut",
      description:
        "App that you can use to check currency rates. Written in SwiftUI.",
      tags: ["iOS App", "SwiftUI", "WidgetKit", "API"],
      link: "https://github.com/mbdjj/Walut",
      img: walutImg,
      imgAlt: "Walut app promo image",
    },
    {
      name: "bartminski.ga",
      description: "My personal website.",
      tags: ["Website", "React", "next.js", "CSS"],
      link: "https://github.com/mbdjj/bartminski.ga",
      img: websiteImg,
      imgAlt: "My personal website promo image",
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

        <div className={styles.projectsContainer}>
          {projects.map((project, index) => {
            return (
              <div key={index} className={styles.project}>
                <Link href={project.link} target="_blank" rel="noreferrer">
                  <div className={styles.imageDiv}>
                    <Image
                      src={project.img}
                      alt={project.imgAlt}
                      placeholder="blur"
                      className={styles.projectImage}
                    />
                  </div>
                  <div className={styles.textDiv}>
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                    <div className={styles.tagsWrapper}>
                      {project.tags.map((tag, index) => {
                        return (
                          <p key={index} className={styles.tag}>
                            {tag}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="line"></div>
        <Footer />
      </SiteLayout>
    </>
  );
}
