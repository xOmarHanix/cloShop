import React from 'react';
import './aboutUs.css';
import AboutImg from '../../assets/images/pexels-dark-siren-2307303.jpg'

function AboutUs() {
  return (
    <div className='container'>
        <div className="about-us">
            <div className="about-us-img">
                <img src={AboutImg} alt='about' />
            </div>
            <div className="about-us-info">
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, ea animi? Maiores amet velit ullam officiis, saepe totam suscipit incidunt enim explicabo fugit quos, voluptatum beatae. Voluptatibus ad autem aspernatur.</p>
                <h2>This Site Developed by <br /> <span className='signature'><hr /> Omar Hani Kamel <hr /></span></h2>
            </div>
        </div>
    </div>
  )
}

export default AboutUs