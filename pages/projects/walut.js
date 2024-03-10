import Image from "next/image";
import styles from "../../styles/ProjectPage.module.css";

import walutImg from "../../public/images/screenshots/walut.png";

export default function Walut() {
  return (
    <>
      <Image src={walutImg} alt={"Walut app promo image"} placeholder="blur" className={styles.promoImage} />
    </>
  );
}
