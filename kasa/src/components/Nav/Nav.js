import styles from "./nav.module.scss";
import { Link, NavLink } from "react-router-dom";

import logo from "../../assets/Logo.svg";

function Nav() {
  let activeClassName = `${styles.navbar__link} ${styles.navbar__active}`;
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.navbar__brand}>
        <img src={logo} alt="logo Kasa"></img>
      </Link>
      <ul className={styles.navbar__links}>
        <li className={styles.navbar__item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeClassName : styles.navbar__link
            }
            to="/"
            end
          >
            Acceuil
          </NavLink>
        </li>
        <li className={styles.navbar__item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeClassName : styles.navbar__link
            }
            to="aboute"
          >
            A Propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
