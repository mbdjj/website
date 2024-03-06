import Head from "next/head";
import SiteLayout from "../components/SiteLayout/SiteLayout";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import Construction from "../components/Construction/Construction";
import styles from "../styles/Links.module.css";

import Link from "next/link";

export default function Links() {
  const links = [
    {
      service: "GitHub",
      url: "https://github.com/mbdjj",
      nickname: "mbdjj",
      description: "Most of my code, all in one place.",
      backgroundColor: "#333",
      textColor: "#f5f5f5",
    },
    {
      service: "CV",
      url: "https://read.cv/bartmisnki",
      nickname: "bartmisnki",
      description: "My CV but it actually looks nice.",
      backgroundColor: "#f6f6f6",
      textColor: "#111111",
    },
    {
      service: "Threads",
      url: "https://threads.net/bartmisnki",
      nickname: "@bartmisnki",
      description: "My personal diary.",
      backgroundColor: "#000000",
      textColor: "#ffffff",
    },
    {
      service: "LinkedIn",
      url: "https://www.linkedin.com/in/bartmisnki/",
      nickname: "Marcin Bartmiński",
      description: "My working profile.",
      backgroundColor: "#0077b5",
      textColor: "#f5f5f5",
    },
    {
      service: "Discord",
      url: "https://discord.com/",
      nickname: "bartmisnki",
      description: "Talking to frens.",
      backgroundColor: "#5865f2",
      textColor: "#ffffff",
    },
    {
      service: "Steam",
      url: "https://steamcommunity.com/id/mbdjj",
      nickname: "marcin",
      description: "Games, games, games.",
      backgroundColor: "#2a475e",
      textColor: "#c7d5e0",
    },
    {
      service: "Apple Music",
      url: "https://music.apple.com",
      nickname: "@bartmisnki",
      description: "Where I listen to music.",
      backgroundColor: "#fc3c44",
      textColor: "#ffffff",
    },
    {
      service: "Instagram",
      url: "https://www.instagram.com/bartmisnki/",
      nickname: "@bartmisnki",
      description: "Photos of me.",
      backgroundColor: "#e1306c",
      textColor: "#ffffff",
    },
  ];
  return (
    <>
      <Head>
        <title>Links</title>
        <meta
          name="description"
          content="Links to all my social media platforms."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <SiteLayout>
        <Nav selectedItem="links" />
        <div className="line"></div>

        <div className={styles.linksContainer}>
          {links.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.url}
                className={styles.link}
                style={{ backgroundColor: link.backgroundColor }}
                target="_blank"
                rel="noreferrer"
              >
                <div className={styles.nameAndNick}>
                  <h3 style={{ color: link.textColor }}>{link.service}</h3>
                  <p style={{ color: link.textColor }}>{link.nickname}</p>
                </div>
                <p style={{ color: link.textColor }}>{link.description}</p>
              </Link>
            );
          })}
        </div>

        <div className="line"></div>
        <Footer />
      </SiteLayout>
    </>
  );
}
