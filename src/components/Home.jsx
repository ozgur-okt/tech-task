import { home } from "../data/home";
import styles from '../styles/Home.module.scss';

function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.textContainer}>
        <h1>{home.title}</h1>
        <p>{home.subtitle}</p>
        <div>
          <button>{home.buttonText}</button>
          <a href={home.link.url}>{home.link}</a>
        </div>
      </div>
      <img className={styles.homeImage} src={home.image} alt={home.alt} />
    </div>
  );
}

export default Home;