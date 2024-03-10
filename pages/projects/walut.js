import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/ProjectPage.module.css";

import walutImg from "../../public/images/screenshots/walut.png";

export default function Walut() {
  return (
    <>
      <Head>
        <title>Walut</title>
        <meta name="description" content="App that you can use to check currency rates. Written in SwiftUI." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Image src={walutImg} alt={"Walut app promo image"} placeholder="blur" className={styles.promoImage} />
    </>
  );
}
