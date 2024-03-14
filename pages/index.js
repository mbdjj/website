import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import marcinPhoto from "../public/images/pfp.jpeg";
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

export default function Home() {
  const age = getAge();

  return (
    <>
      <Head>
        <title>Marcin Bartmiński</title>
        <meta name="description" content="My personal portfolio website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <p>
        Hello! 👋 <br />
        I&apos;m Marcin, {getArticle(age)} {age} year old iOS Developer and IT
        student. In my free time I play video games, code, and train
        calisthenics. You can follow me on{" "}
        <a
          className="inlineLink"
          href="https://threads.net/bartmisnki"
          target="_blank"
          rel="noreferrer"
        >
          Threads
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
        <a className="inlineLink" href="mailto:marcin@bartminski.dev">
          Email
        </a>
        .
      </p>
    </>
  );
}
