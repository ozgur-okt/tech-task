import { blog } from '../data/blog'
import styles from '../styles/Blog.module.scss';

function Blog() {

  return (
    <div className={styles.blogContainer}>
      <h5>{blog.section}</h5>
      <h1>{blog.title}</h1>
      <div className={styles.c1}>
        <div className={styles.c2}>
          {blog.cards.map((card, index) => (
            <div className={styles.card} key={index}>
              <h3>{card.title}</h3>
              <p>{card.date}</p>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog