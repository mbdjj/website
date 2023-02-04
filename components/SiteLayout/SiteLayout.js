import styles from "./SiteLayout.module.css"

export default function SiteLayout(props) {
  return (
    <div className={styles.websiteContainer}>
      <div className={styles.contentContainer}>
        {props.children}
      </div>
    </div>
  );
}
