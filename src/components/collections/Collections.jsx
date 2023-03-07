import React from 'react';
import './style.css';
import { collectionsData } from '../../assets/data/services';
import Heading from '../../common/heading/Heading';

function Collections() {
  return (
    <div className='container'>
        <Heading title='Our Collections' />
        <div className="collections">
            {
                collectionsData.map((item) => (
                    <div className="collections-items" key={item.id}>
                        <img src={item.img} alt='item' />
                        <div className="collections-text">
                            <h2>{item.title}</h2>
                            <h5>Collections</h5>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Collections