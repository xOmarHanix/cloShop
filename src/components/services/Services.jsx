import React from 'react';
import Heading from '../../common/heading/Heading';
import HeadingTwo from '../../common/headingTwo/HeadingTwo';
import { sectionsData, siteServicesData } from '../../assets/data/services';
import './services.css';

function Services() {
  return (
    <div className='container-two'>
        <div className="services">
            <Heading title='Our Services' />
            <ul className="site-services-cards">
              {siteServicesData.map((item, index) => (
                <li className="site-services-items" key={index} >
                  <span>{item.icon}</span>
                  <div className="services-items-info">
                    <h3>{item.title}</h3>
                    <p>{item.subtitle}</p>
                  </div>
                </li>
              ))}
            </ul>
        </div>
    </div>
  )
}

export default Services