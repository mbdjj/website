import Head from "next/head";
import styles from "../../styles/Projects.module.css";

import Link from "next/link";
import Image from "next/image";

import walutImg from "../../public/images/screenshots/walut.png";
import websiteImg from "../../public/images/screenshots/website.png";
import whenMaturaImg from "../../public/images/screenshots/whenMatura.png";
import walutWebImg from "../../public/images/screenshots/walutWeb.png";

export default function Projects() {
  const projects = [
    {
      name: "Walut",
      description:
        "App that you can use to check currency rates. Written in SwiftUI.",
      link: "/projects/walut",
      img: walutImg,
      imgAlt: "Walut app promo image",
      year: 2022,
    },
    {
      name: "Website",
      description: "My personal website.",
      link: "https://github.com/mbdjj/website",
      img: websiteImg,
      imgAlt: "My personal website promo image",
      year: 2022,
    },
    {
      name: "Kiedy matura?",
      description: "App to check when is your matura exam.",
      link: "https://github.com/mbdjj/when-matura",
      img: whenMaturaImg,
      imgAlt: "Kiedy matura? app promo image",
      year: 2023,
    },
    {
      name: "Walut Web",
      description: "Walut but web application.",
      link: "https://github.com/mbdjj/Walut-web",
      img: walutWebImg,
      imgAlt: "Walut web promo image",
      year: 2023,
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
      <div className={styles.projectsContainer}>
        {projects.map((project, index) => {
          return (
            <div key={index} className={styles.project}>
              <Link href={project.link}>
                <div className={styles.imageDiv}>
                  <Image
                    src={project.img}
                    alt={project.imgAlt}
                    placeholder="blur"
                    className={styles.projectImage}
                  />
                </div>
                <div className={styles.textDiv}>
                  <div className={styles.titleDiv}>
                    <p>{project.name}</p>
                    <p className={styles.secondaryText}>
                      &nbsp;·&nbsp;{project.year}
                    </p>
                  </div>
                  <p className={styles.secondaryText}>{project.description}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
