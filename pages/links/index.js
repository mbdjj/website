import Head from "next/head";
import styles from "../../styles/Links.module.css";
import Link from "next/link";

export default function Links() {
  const links = [
    {
      service: "GitHub",
      url: "https://github.com/mbdjj",
      nickname: "mbdjj",
      description: "My code, all in one place.",
      backgroundColor: "#333",
      textColor: "#f5f5f5",
    },
    {
      service: "CV",
      url: "/cv.pdf",
      nickname: "",
      description: "My CV (very epic).",
      backgroundColor: "#f6f6f6",
      textColor: "#111111",
    },
    {
      service: "E-mail",
      url: "mailto:marcin@bartminski.dev",
      nickname: "marcin@bartminski.dev",
      description: "My proffesional e-mail.",
      backgroundColor: "#f6f6f6",
      textColor: "#0084ff",
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
      description: "Talking to frends.",
      backgroundColor: "#5865f2",
      textColor: "#ffffff",
    },
    {
      service: "Steam",
      url: "https://steamcommunity.com/id/mbdjj",
      nickname: "mbdjj",
      description: "Gaming.",
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
    </>
  );
}
