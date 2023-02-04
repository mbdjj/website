import Head from "next/head";
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
      <Construction />
    </>
  );
}