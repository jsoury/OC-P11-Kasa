import styles from "./header.module.scss";

function Header({ title, background }) {
  return (
    <div className={styles.header}>
      {title ? <h1 className={styles.header__title}>{title}</h1> : null}
      <img className={styles.header__background} src={background} alt={title} />
    </div>
  );
}
export default Header;
