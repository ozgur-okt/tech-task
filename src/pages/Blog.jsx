
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { blog } from '../data/blog'
import CardBlog from '../components/CardBlog';

function Blog() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <h5>{blog.section}</h5>
      <h3>{blog.title}</h3>
      <Slider {...settings}>
        {blog.cards.map((card, index) => (
          <CardBlog key={index} title={card.title} date={card.date} description={card.description} />
        ))}
      </Slider>
    </div>
  );
}

export default Blog