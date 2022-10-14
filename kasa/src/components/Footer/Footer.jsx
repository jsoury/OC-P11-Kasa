import styles from "./footer.module.scss";

import logo from "../../assets/Logo-White.svg";

function Footer() {
  return (
    <div className={styles.footer}>
      <img src={logo} alt="logo kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
}
export default Footer;
