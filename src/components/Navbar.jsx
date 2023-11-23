import { navbar } from '../data/navbar'
import styles from '../styles/Navbar.module.scss'
import { ReactComponent as ArrowIcon } from '../assets/icons/icon-red-right-arrow.svg'

function Navbar() {
  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.logo}>
        <img src={navbar.logo} alt={navbar.alt} />
      </div>
      <div className={styles.navbar}>
        <div>
          {navbar.links.map((link, index) => {
            return (
              <a key={index} href={link.link} > {link.name} </a>
            )
          })}
        </div>
        <div>
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