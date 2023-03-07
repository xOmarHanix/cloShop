import React from 'react';
import './hero.css';
import { Link } from 'react-router-dom';
import HeroImg from '../../assets/images/fb383719-e945-42bd-81cc-749b50e2e16f.jpg';
import BannerImg from '../../assets/images/portrait.jpg';

function Hero() {
  return (
    <div className="container">
      <div className="hero-banner">
        <img src={BannerImg} alt="" />
      </div>
      <div className="black-border"></div>
      <div className='hero'>
        <div className="hero-info">
          <h1>Lorem ipsum dolor sit amet consectetur.</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint dicta officia ratione debitis laudantium fugit aliquam corporis, similique et nisi aspernatur veritatis error, tempora sunt enim totam rem odit placeat.</p>
          <Link to='/shop'>
            <button>Shop Now</button>
          </Link>
        </div>
        <div className="hero-background">
          <img src={HeroImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero