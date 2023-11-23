import { portfolio } from '../data/portfolio';
import styles from '../styles/Portfolio.module.scss';

function Portfolio() {
  return (
    <div className={styles.portfolioContainer}>
      <div className={styles.header}>
        <h1>{portfolio.title}</h1>
        <div>
          <img src={portfolio.icons.leftArrow} alt={portfolio.icons.alt}/>
          <img src={portfolio.icons.rightArrow} alt={portfolio.icons.alt}/>
        </div>
      </div>
      <div className={styles.c1}>
        <div className={styles.c2}>
          {portfolio.cards.map((card, index) => (
            <div key={index} className={styles.image}>
              <img src={card.image} alt={card.alt} />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.link}>
        <a href={portfolio.link.link}>{portfolio.link.name}</a>
      </div>
    </div>
  );
}

export default Portfolio;
