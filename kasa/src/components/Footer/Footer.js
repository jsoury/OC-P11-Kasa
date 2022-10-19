import styles from './footer.module.scss'

import logo from '@/assets/images/components/Footer/Logo-White.svg'

function Footer() {
  return (
    <footer className={styles.footer}>
      <img src={logo} alt="logo kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
export default Footer
