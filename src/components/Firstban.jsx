import React from 'react';
import b1 from './images/b1.jpg';
import './Firstban.css';
import { Link } from 'react-router-dom';

function Firstban() {
  return (
    <div className='container-fluid p-0 position-relative'>
      <img src={b1} className="img-fluid" alt="Responsive banner" />
      <div className="image-text1 container-fluid position-absolute text-light">
        <h1 className='display-4 display-md-3 display-lg-1'>Elevate Your Style</h1>
        <p className='display-6 display-md-5 display-lg-3'>Discover the Latest Trends</p>
        <Link to="/products" className="btn btn-light">Shop Now</Link>
      </div>
    </div>
  );
}

export default Firstban;
