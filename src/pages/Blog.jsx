
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { blog } from '../data/blog'
import styles from '../styles/Blog.module.scss';

function Blog() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '30px'
  };

  return (
    <div className={styles.blogContainer}>
      <h5>{blog.section}</h5>
      <h1>{blog.title}</h1>
      <div className={styles.carousel}>
        <Slider {...settings}>
          {blog.cards.map((card, index) => (
            <div className={styles.card} key={index}>
              <h3>{card.title}</h3>
              <p>{card.date}</p>
              <p>{card.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Blog