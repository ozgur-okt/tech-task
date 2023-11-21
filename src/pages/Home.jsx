import React from 'react';
import { home } from "../data/home";
import styles from '../styles/Home.module.scss';

function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.textContainer}>
        <h3>{home.title}</h3>
        <p>{home.subtitle}</p>
        <div className={styles.buttonLinkContainer}>
          <button>{home.button.text}</button>
          <a href={home.link.url}>{home.link}</a>
        </div>
      </div>
      <img className={styles.homeImage} src={home.image} alt={home.alt} />
    </div>
  );
}

export default Home;