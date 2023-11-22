import { about } from '../data/about';
import styles from '../styles/About.module.scss';


function About() {

  return (
    <div className={styles.aboutContainer}>
      <div className={styles.image}>
        <img src={about.image} alt={about.alt} />
      </div>
      <div>
        <h5>{about.section}</h5>
        <div className={styles.c1}>
          <div className={styles.c2}>
            {about.cards.map((card, index) => (
              <div className={styles.i} key={index}>
                <h1>{card.title}</h1>
                <p>{card.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
