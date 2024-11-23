import React from 'react'
import t1 from './images/t1.jpg'
import t2 from './images/t2.jpg'
import './Card1.css'
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div className='mt-5 container'>
      <h1 className='text-center'>Step into Style</h1>
      <div class="row">

        <div class="col-lg-6 pt-5 position-relative product-card">
          <img src={t2} class="img-fluid" alt="Responsive image"/>
          <div class="image-text2 position-absolute text-light">
            <h3>Elevate Your Style</h3>
            <p>Discover the Latest Trends</p>
            <Link to="/products" className="btn btn-light">Shop Now</Link>
          </div>
        </div>

        <div class="col-lg-6 pt-5 position-relative product-card">
          <img src={t1} class="img-fluid" alt="Responsive image"/>
          <div class="image-text2 position-absolute text-light">
            <h3>Fall into Fashion</h3>
            <p>Browse the Collection</p>
            <Link to="/products" className="btn btn-light">Shop Now</Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Products