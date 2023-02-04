import styles from "./Nav.module.css";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

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

export default function Nav(props) {
  const [title, setTitle] = useState("");
  const selectedArray = ["", ""];
  const captionRef = useRef(null);

  switch (props.selectedItem) {
    case "index":
      selectedArray[0] = "selected";
      break;
    case "projects":
      selectedArray[1] = "selected";
      break;
  }

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
    <div className={styles.nav}>
      <div className={styles.navContainer}>
        <div className={styles.avatarLinkDiv}>
          <Link href="/" className={styles.avatarLink}>
            <div className={styles.avatarDiv}>
              <img src="images/nft-avatar.png" className={styles.avatarImage} />
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
              <Link className={"navLink " + selectedArray[0]} href="/">
                About me
              </Link>
            </p>
          </div>
          <div>
            <p>
              <Link className={"navLink " + selectedArray[1]} href="/projects">
                Projects
              </Link>
            </p>
          </div>
        </nav>
      </div>
    </div>
  );
}
