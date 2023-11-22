import { footer } from '../data/footer'
import styles from '../styles/Footer.module.scss'

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <h5> {footer.brand} </h5>
      <h1> {footer.title} </h1>
      <div className={styles.links}>
        {footer.links.map((link, index) => (
          <button key={index}>
            {link.name}
          </button>
        ))}
      </div>
      <p>{footer.license}</p>
      <div className={styles.medias}>
        {footer.medias.map((media, index) => (
          <img key={index} src={media.icon} alt={media.alt} />
        ))}
      </div>
    </footer>
  )
}

export default Footer