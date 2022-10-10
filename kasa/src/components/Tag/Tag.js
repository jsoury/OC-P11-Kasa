import styles from "./tag.module.scss";

function Tag({ label }) {
  return <div className={styles.tag}>{label}</div>;
}

export default Tag;
