import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { about } from '../data/about';
import styles from '../styles/About.module.scss';

function CustomPrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={`${styles.customArrow} ${styles.customPrevArrow}`}
      onClick={onClick}
    >
      Prev
    </div>
  );
}

function CustomNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={`${styles.customArrow} ${styles.customNextArrow}`}
      onClick={onClick}
    >
      Next
    </div>
  );
}

function About() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    //prevArrow: <CustomPrevArrow />,
    //nextArrow: <CustomNextArrow />,
  };

  return (
    <div className={styles.aboutContainer}>
      <div className={styles.image}>
        <img src={about.image} alt={about.alt} />
      </div>
      <div>
        <h5>{about.section}</h5>
        <div className={styles.carousel}>
          <Slider {...settings}>
            {about.cards.map((card, index) => (
              <div className={styles.aboutCard} key={index}>
                <h1>{card.title}</h1>
                <p>{card.subtitle}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default About;
