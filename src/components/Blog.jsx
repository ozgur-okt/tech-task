import { blog } from '../data/blog'
import styles from '../styles/Blog.module.scss'
import { ReactComponent as ArrowIcon } from '../assets/icons/icon-red-right-arrow.svg'

function Blog() {

  return (
    <div className={styles.blogContainer}>
      <h5>{blog.section}</h5>
      <div className={styles.header}>
        <h1>{blog.title}</h1>
        <div>
          <img src={blog.icons.leftArrow} alt={blog.icons.alt} />
          <img src={blog.icons.rightArrow} alt={blog.icons.alt} />
        </div>
      </div>
      <div className={styles.sliderContainer}>
        <div className={styles.slider}>
          {blog.cards.map((card, index) => (
            <div className={styles.card} key={index}>
              <h3>{card.title}</h3>
              <p>{card.date}</p>
              <p>{card.description}</p>
              <ArrowIcon className={styles.arrowIcon} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog