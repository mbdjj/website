import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import marcinPhoto from "../public/images/marcin.jpeg";
import { useState, useEffect, useRef } from "react";
import Tilt from "react-parallax-tilt";

function getAge() {
  const today = new Date();
  const birthDate = new Date("2004-02-23");
  const differenceInMilliseconds = today.getTime() - birthDate.getTime();
  const dateSince1970 = new Date(differenceInMilliseconds);
  const age = dateSince1970.getFullYear() - 1970;

  return age;
}

function getArticle(age) {
  return [8, 11, 18].includes(age) ? "an" : "a";
}

function getTitle() {
  const titleArray = [
    "iOS app developer",
    "loved boyfriend",
    "IT student",
    "Yu-Gi-Oh duelist",
    "Rocket League player",
    "SwiftUI enthusiast",
    "Creator of this website",
    "Walut's creator",
    "Apple Developer Program member",
    "マチン・バートミスキ",
  ];
  const randomIndex = Math.floor(Math.random() * titleArray.length);
  return titleArray[randomIndex];
}

function getCurrentYear() {
  const today = new Date();

  return today.getFullYear();
}

export default function Home() {
  const [title, setTitle] = useState("");
  const age = getAge();
  const captionRef = useRef(null);

  useEffect(() => {
    setTitle(getTitle());
    captionRef.current.classList.add(styles.animateTitle);
    captionRef.current.classList.add('captionDoneLoading');
    setTimeout(() => {
      captionRef.current.classList.remove(styles.animateTitle);
    }, 250);
  }, []);

  const changeTitle = () => {
    var timeout = null;

    const prevTitle = title;
    const newTitle = getTitle();

    if (prevTitle != newTitle) {
      setTitle(newTitle);
      captionRef.current.classList.add(styles.animateTitle);
      timeout = setTimeout(() => {
        captionRef.current.classList.remove(styles.animateTitle);
      }, 250);
    } else {
      changeTitle();
    }
  };

  return (
    <>
      <Head>
        <title>Marcin Bartmiński</title>
        <meta name="description" content="My personal portfolio website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={styles.websiteContainer}>
        <div className={styles.contentContainer}>
          <div className={styles.nav}>
            <div className={styles.navContainer}>
              <div className={styles.avatarLinkDiv}>
                <Link href="/" className={styles.avatarLink}>
                  <div className={styles.avatarDiv}>
                    <img
                      src="images/nft-avatar.png"
                      className={styles.avatarImage}
                    />
                  </div>
                </Link>
              </div>
              <div className={styles.titleDiv}>
                <h1>Marcin Bartmiński</h1>
                <p className="caption" ref={captionRef} onClick={changeTitle}>
                  {title || "..."}
                </p>
              </div>
              <nav>
                <div>
                  <p>
                    <Link className="navLink selected" href="/">
                      About me
                    </Link>
                  </p>
                </div>
                <div>
                  <p>
                    <Link className="navLink" href="/projects">
                      Projects
                    </Link>
                  </p>
                </div>
              </nav>
            </div>
          </div>
          <div className={styles.line}></div>
          <div>
            <p>
              Hello! I&apos;m Marcin, {getArticle(age)} {age} year old iOS
              Developer and{" "}
              <a
                className="inlineLink"
                href="https://zsk.poznan.pl"
                target="_blank"
                rel="noreferrer"
              >
                ZSK
              </a>{" "}
              student. In my free time I play video games, code, and watch
              movies. You can follow me on{" "}
              <a
                className="inlineLink"
                href="https://twitter.com/bartmisnki"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
              , check out my projects on{" "}
              <a
                className="inlineLink"
                href="https://github.com/mbdjj"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              , or send me an{" "}
              <a className="inlineLink" href="mailto:marcin@bartminski.ga">
                Email
              </a>
              .
            </p>
          </div>
          <Tilt className={styles.photoDiv} tiltMaxAngleX="5" tiltMaxAngleY="5">
            <Image
              src={marcinPhoto}
              alt="Marcin in park chilling."
              placeholder="blur"
              className={styles.photoImage}
            />
          </Tilt>
          <div className={styles.line}></div>
          <footer>
            <p>© Marcin Bartmiński 2022-{getCurrentYear()}</p>
          </footer>
        </div>
      </div>
    </>
  );
}
