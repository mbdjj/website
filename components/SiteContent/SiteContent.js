import styles from "./SiteContent.module.css"

export default function SiteContent(props) {
  return (
    <div className={styles.contentContainer}>
      {props.children}
    </div>
  );
}