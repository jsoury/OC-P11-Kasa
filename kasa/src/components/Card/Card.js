import styles from './card.module.scss'
import { Link } from 'react-router-dom'

function Card({ id, title, cover }) {
  return (
    <div className={styles.card}>
      <Link to={`hosting/${id}`} className={styles.card__link}>
        <div className={styles.card__overlay}></div>
        <div className={styles.card__title}>{title}</div>
        <img src={cover} alt={title} className={styles.card__cover}></img>
      </Link>
    </div>
  )
}
export default Card
