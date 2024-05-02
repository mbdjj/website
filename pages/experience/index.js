import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Experience.module.css";

import zskLogo from "../../public/images/logos/zsk.png";
import srpgjLogo from "../../public/images/logos/srpgj.png";
import appuniteLogo from "../../public/images/logos/appunite.png";

export default function Experience() {
  const experiences = [
    {
      position: "Bilingual IT Student",
      place: "Zespół Szkół Komunikacji w Poznaniu",
      startDate: "09.2019",
      endDate: "04.2024",
      url: "https://www.zsk.poznan.pl/",
      logo: zskLogo,
      alt: "ZSK logo",
    },
    {
      position: "IT Intern",
      place: "Sąd Rejonowy Poznań - Grunwald i Jeżyce",
      startDate: "05.2022",
      endDate: "05.2022",
      url: "https://poznan-grunwald.sr.gov.pl/",
      logo: srpgjLogo,
      alt: "SRPGJ logo",
    },
    {
      position: "iOS Intern",
      place: "Appunite",
      startDate: "05.2023",
      endDate: "05.2023",
      url: "https://appunite.com",
      logo: appuniteLogo,
      alt: "Appunite logo",
    },
  ];

  return (
    <>
      <Head>
        <title>Experience</title>
        <meta
          name="description"
          content="My experience and places I worked in."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <ol className={styles.experienceList}>
        {experiences.reverse().map((experience, index) => {
          return (
            <li key={index}>
              <a href={experience.url} className={styles.experienceItem}>
                <div className={styles.leftBlock}>
                  <Image
                    src={experience.logo}
                    alt={experience.alt}
                    placeholder="blur"
                    height={50}
                    width={50}
                    className={styles.logo}
                  />
                  <div className={styles.textDiv}>
                    <p>{experience.position}</p>
                    <p className={styles.secondary}>{experience.place}</p>
                  </div>
                </div>
                <div className={styles.rightBlock}>
                  <p className={styles.secondary}>
                    {experience.startDate != experience.endDate
                      ? `${experience.startDate}\xA0- ${experience.endDate}`
                      : experience.startDate}
                  </p>
                </div>
              </a>
            </li>
          );
        })}
      </ol>
    </>
  );
}
