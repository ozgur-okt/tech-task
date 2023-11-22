import { services } from '../data/services'
import styles from '../styles/Services.module.scss'

function Services() {
  return (
    <div className={styles.servicesContainer}>
      <div>
        <h1>{services.title}</h1>
        <button>{services.buttonText}</button>
      </div>
      {
        services.cards.map((card, index) => (
          <div className={styles.card} key={index}>
            <img src={card.icon} alt={card.alt} />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Services