import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { portfolio } from '../data/portfolio';

function Portfolio() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <h1>{portfolio.section}</h1>
      <Slider {...settings}>
        {portfolio.carousel.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </Slider>
      <p>{portfolio.link}</p>
    </div>
  );
}

export default Portfolio;
