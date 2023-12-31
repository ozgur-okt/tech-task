import { about } from '../data/about'
import styles from '../styles/About.module.scss'

function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.image}>
        <img src={about.image} alt={about.alt} />
      </div>
      <div>
        <h5>{about.section}</h5>
        <div className={styles.sliderContainer}>
          <div className={styles.slider}>
            {about.cards.map((card, index) => (
              <div className={styles.card} key={index}>
                <h1>{card.title}</h1>
                <p>{card.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.arrows}>
          <img src={about.icons.leftArrow} alt={about.icons.alt} />
          <img src={about.icons.rightArrow} alt={about.icons.alt} />
        </div>
      </div>
    </div>
  )
}

export default About
