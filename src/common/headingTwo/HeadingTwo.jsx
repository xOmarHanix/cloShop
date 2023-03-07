import React from 'react';
import './style.css';

function HeadingTwo({title}) {
  return (
    <div>
        <div className="heading-two">
            <h3>Our</h3>
            <hr />
            <h3>{title}</h3>
        </div>
    </div>
  )
}

export default HeadingTwo