import styles from "./error.module.scss";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className={styles.error}>
      <div className={styles.error__title}>404</div>
      <p className={styles.error__content}>
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link className={styles.error__link} to="/">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}
export default Error;
