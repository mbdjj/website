import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import marcinPhoto from "../public/images/pfp.png";

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
      <div>
        <Image
          src={marcinPhoto}
          alt="Marcin in suit"
          height={100}
          width={100}
          className={styles.photoImage}
          placeholder="blur"
        />
      </div>
      <p>
        Hello! I&apos;m Marcin, {getArticle(age)} {age} year old iOS Developer and IT
        student. In addition to coding, I also train calisthenics and play video
        games.
      </p>
    </>
  );
}
