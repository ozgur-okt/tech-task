import { topBar } from '../data/topBar'
import styles from '../styles/TopBar.module.scss'


function TopBar() {
  return (
    <nav className={styles.topBarContainer}>
      <div className={styles.logo}>
        <img src={topBar.logo} alt={topBar.alt}></img>
      </div>
      <div className={styles.navbar}>
        {topBar.links.map((link, index) => {
          return (
            <button className={styles.navBtn} key={index} > {link.name} </button>
          )
        })}
        <div className={styles.select}>
          <select>
            {topBar.languages.map((language, index) => {
              return (
                <option key={index} value={language}>{language}</option>
              )
            })}
          </select>
        </div>
        <button className={styles.contactBtn}> {topBar.button.text} </button>
      </div>
    </nav>
  )
}

export default TopBar