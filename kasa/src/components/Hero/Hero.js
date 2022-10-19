import styles from './hero.module.scss'

function Header({ title, background, home }) {
  return (
    <div className={`${styles.header} ${home && styles.header__home}`}>
      {title ? <h1 className={styles.header__title}>{title}</h1> : null}
      <img className={styles.header__background} src={background} alt={title} />
    </div>
  )
}
export default Header
