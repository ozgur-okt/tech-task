import React from 'react'
import { topBar } from '../data/topBar'
import styles from '../styles/TopBar.module.scss'


function TopBar() {
  return (
    <div className={styles.topBarContainer}>
      <div className={styles.logo}>
        <img src={topBar.logo} alt={topBar.alt}></img>
      </div>
      <div className={styles.navbar}>
        {topBar.links.map((link, index) => {
          return (
            <button className={styles.navBtn} key={index} > {link.name} </button>
          )
        })}
        <button className={styles.contactBtn}> {topBar.button.text} </button>
      </div>
    </div>
  )
}

export default TopBar