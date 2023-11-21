import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { portfolio } from '../data/portfolio';
import styles from '../styles/Portfolio.module.scss';

function Portfolio() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 3
  };

  return (
    <div className={styles.portfolioContainer}>
      <h1>{portfolio.title}</h1>
      <Slider {...settings}>
        {portfolio.cards.map((card, index) => (
          <div className={styles.card}>
            <img src={card.image} alt={card.title} />
          </div>
        ))}
      </Slider>
      <div className={styles.link}>
        <a>{portfolio.link}</a>
      </div>
    </div>
  );
}

export default Portfolio;
