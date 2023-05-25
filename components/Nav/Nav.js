import styles from "./Nav.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import nftAvatar from "../../public/images/nft-avatar.png";

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

function getNavTitle(selected) {
  switch (selected) {
    case "projects":
      return "My projects";
    case "experience":
      return "My experience";
    case "links":
      return "Social links";
    default:
      return "Marcin Bartmiński";
  }
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
    case "experience":
      selectedArray[2] = "selected";
      break;
    case "links":
      selectedArray[3] = "selected";
  }

  useEffect(() => {
    if (selectedArray[0] == "selected") {
      setTitle(getTitle());
      captionRef.current.classList.add(styles.animateTitle);
      setTimeout(() => {
        captionRef.current.classList.remove(styles.animateTitle);
      }, 250);
    }
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
          <Link href="/" className={styles.avatarLink} aria-label="Main page">
            <div className={styles.avatarDiv}>
              <Image
                src={nftAvatar}
                alt="Nyoling #6949"
                placeholder="blur"
                className={styles.avatarImage}
                width={48}
                height={48}
              />
            </div>
          </Link>
        </div>
        <div className={styles.titleDiv}>
          <h1
            style={
              selectedArray[0] != "selected" ? { paddingBottom: "14px" } : {}
            }
          >
            {getNavTitle(props.selectedItem)}
          </h1>

          {selectedArray[0] == "selected" ? (
            <p className="caption" ref={captionRef} onClick={changeTitle}>
              {title || "..."}
            </p>
          ) : (
            <></>
          )}
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
          <div>
            <p>
              <Link className={"navLink " + selectedArray[2]} href="/experience">
                Experience
              </Link>
            </p>
          </div>
          <div>
            <p>
              <Link className={"navLink " + selectedArray[3]} href="/links">
                Links
              </Link>
            </p>
          </div>
        </nav>
      </div>
    </div>
  );
}
