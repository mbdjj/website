import Head from "next/head";
import SiteLayout from "../components/SiteLayout/SiteLayout";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import Construction from "../components/Construction/Construction";
import styles from "../styles/Experience.module.css";
import SiteContent from "../components/SiteContent/SiteContent";

export default function Experience() {
  const schoolEndDate = () => {
    const now = new Date();
    const currentTimestamp = now.getTime();
    const schoolEndTimestamp = Date.parse("2024-04-26");
    return schoolEndTimestamp < currentTimestamp ? "04.2024" : "present";
  };
  const experiences = [
    {
      position: "Bilingual IT Student",
      place: "Zespół Szkół Komunikacji w Poznaniu",
      startDate: "09.2019",
      endDate: schoolEndDate(),
      url: "https://www.zsk.poznan.pl/",
    },
    {
      position: "IT Intern",
      place: "Sąd Rejonowy Poznań - Grunwald i Jeżyce",
      startDate: "05.2022",
      endDate: "05.2022",
      url: "https://poznan-grunwald.sr.gov.pl/",
    },
    {
      position: "iOS Intern",
      place: "AppUnite",
      startDate: "05.2023",
      endDate: "05.2023",
      url: "https://appunite.com",
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
      <SiteLayout>
        <Nav selectedItem="experience" />
        <div className="line"></div>

        <SiteContent>
          <ol className={styles.experienceList}>
            {experiences.reverse().map((experience, index) => {
              return (
                <li key={index} className={styles.experienceItem}>
                  <a href={experience.url}>
                    <h2>{experience.position}</h2>
                    <p>{experience.place}</p>
                    <p>
                      {experience.startDate != experience.endDate
                        ? `${experience.startDate} - ${experience.endDate}`
                        : experience.startDate}
                    </p>
                  </a>
                </li>
              );
            })}
          </ol>
        </SiteContent>

        <div className="line"></div>
        <Footer />
      </SiteLayout>
    </>
  );
}
