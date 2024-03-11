import styles from "./Nav.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import nftAvatar from "../../public/images/nft-avatar.png";

function getTitle() {
  const titleArray = [
    "iOS Developer",
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
    case "/projects":
      return "My projects";
    case "/projects/walut":
      return "Walut";
    case "/experience":
      return "My experience";
    case "/links":
      return "Social links";
    default:
      return "Marcin Bartmiński";
  }
}

export default function Nav() {
  const pathname = usePathname();
  const [title, setTitle] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const captionRef = useRef(null);

  useEffect(() => {
    setTitle(getTitle());
    if (pathname === "/") {
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
        <div className={styles.navTitle}>
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
            <h1>{getNavTitle(pathname)}</h1>

            {pathname === "/" ? (
              <p className="caption" ref={captionRef} onClick={changeTitle}>
                {title || "..."}
              </p>
            ) : (
              <></>
            )}
          </div>
        </div>
        <nav>
          <div>
            <p>
              <Link
                className={"navLink " + (pathname === "/" ? "selected" : "")}
                href="/"
              >
                About me
              </Link>
            </p>
          </div>
          <div>
            <p>
              <Link
                className={
                  "navLink " +
                  (pathname.includes("/projects") ? "selected" : "")
                }
                href="/projects"
              >
                Projects
              </Link>
            </p>
          </div>
          <div>
            <p>
              <Link
                className={
                  "navLink " + (pathname === "/experience" ? "selected" : "")
                }
                href="/experience"
              >
                Experience
              </Link>
            </p>
          </div>
          <div>
            <p>
              <Link
                className={
                  "navLink " + (pathname === "/links" ? "selected" : "")
                }
                href="/links"
              >
                Links
              </Link>
            </p>
          </div>
        </nav>
        <div className={styles.menuContainer}>
          <button
            className={styles.menuButton}
            onClick={() => {
              if (showMenu) {
                setShowMenu(false);
              } else {
                setShowMenu(true);
              }
            }}
          >
            Menu
          </button>
          {showMenu ? (
            <div className={styles.floatingWindow}>
              <div style={{ display: "flex", flexFlow: "column nowrap" }}>
                <Link className={(pathname === "/" ? styles.selected : "")} href="/">About me</Link>
                <Link className={(pathname.includes("/projects") ? styles.selected : "")} href="/projects">Projects</Link>
                <Link className={(pathname === "/experience" ? styles.selected : "")} href="/experience">Experience</Link>
                <Link className={(pathname === "/links" ? styles.selected : "")} href="/links">Links</Link>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
