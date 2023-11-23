import { navbar } from '../data/navbar'
import { ReactComponent as ArrowIcon } from '../assets/icons/icon-red-right-arrow.svg'
import styles from '../styles/Navbar.module.scss'

function Navbar() {
  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.logo}>
        <img src={navbar.logo} alt={navbar.alt} />
      </div>
      <div className={styles.navbar}>
        <div className={styles.links}>
          {navbar.links.map((link, index) => {
            return (
              <a key={index} href={link.link} > {link.name} </a>
            )
          })}
        </div>
        <div className={styles.selectBtn}>
          <div className={styles.select}>
            <select>
              {navbar.languages.map((language, index) => {
                return (
                  <option key={index} value={language}>{language}</option>
                )
              })}
            </select>
          </div>
          <button className={styles.contactBtn}> {navbar.buttonText}
            <ArrowIcon className={styles.arrowIcon} />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar