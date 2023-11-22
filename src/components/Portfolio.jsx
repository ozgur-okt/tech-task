import { portfolio } from '../data/portfolio';
import styles from '../styles/Portfolio.module.scss';

function Portfolio() {
  return (
    <div className={styles.portfolioContainer}>
      <h1>{portfolio.title}</h1>
      <div className={styles.c1}>
        <div className={styles.c2}>
          {portfolio.cards.map((card, index) => (
            <div key={index}>
              <img src={card.image} alt={card.title} />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.link}>
        <a href='/'>{portfolio.link}</a>
      </div>
    </div>
  );
}

export default Portfolio;
