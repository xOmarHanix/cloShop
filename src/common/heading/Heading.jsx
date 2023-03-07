import React from 'react';
import './heading.css';

function Heading({ title }) {
  return (
    <div className="heading">
        <hr />
        <h1>{title}</h1>
        <hr />
    </div>
  )
}

export default Heading