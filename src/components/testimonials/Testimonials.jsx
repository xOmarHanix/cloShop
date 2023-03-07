import React from 'react';
import './style.css';
import Heading from '../../common/heading/Heading';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"
import { testimonialsData } from '../../assets/data/Testimonials';
import { FaQuoteLeft } from 'react-icons/fa';


function Testimonials() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <div className='container-two'>
      <div className="testimonials">
        <Heading title='Testimonials' />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <Slider {...settings}
        >
          {
            testimonialsData.map((item) => (
              <div className="testimonials-items" key={item.id}>
                <div className="image-box">
                  <img src={item.img} />
                  <span><FaQuoteLeft /></span>
                </div>
                <div className="test-opinion">
                  <p>{item.opinion}</p>
                </div>
                <div className="test-person-info">
                  <h3>{item.name}</h3>
                  <h4>{item.jop}</h4>
                </div>
              </div>
            ))
          }
        </Slider>
      </div>
    </div>
  )
}

export default Testimonials