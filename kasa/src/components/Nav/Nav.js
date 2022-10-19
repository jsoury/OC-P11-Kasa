import styles from './nav.module.scss'
import { Link, NavLink } from 'react-router-dom'

import logo from '@/assets/images/components/Nav/Logo.svg'

function Nav() {
  let activeClassName = `${styles.navbar__link} ${styles.navbar__active}`
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.navbar__brand} id="logo">
        <img src={logo} alt="logo Kasa"></img>
      </Link>
      <ul className={styles.navbar__links}>
        <li className={styles.navbar__item}>
          <NavLink
            className={({ isActive }) => (isActive ? activeClassName : styles.navbar__link)}
            to="/"
            end
          >
            Accueil
          </NavLink>
        </li>
        <li className={styles.navbar__item}>
          <NavLink
            className={({ isActive }) => (isActive ? activeClassName : styles.navbar__link)}
            to="about"
          >
            A Propos
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
export default Nav
