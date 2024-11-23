import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from './images/v1.jpeg'
import img2 from './images/v2.jpg'
import img3 from './images/v3.jpg'

const Banner1 = () => {
  return (
      <Carousel className='mt-5'>
        <Carousel.Item>
          <img className="d-block w-100" src={img1} />
          <Carousel.Caption>
            <h3>Summer Vibes Collection</h3>
            <p>Embrace the warmth with our breezy summer styles. Lightweight fabrics and vibrant colors for your perfect summer look.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} />
          <Carousel.Caption>
            <h3>Fall/Winter Essentials</h3>
            <p>Stay cozy in style with our new fall and winter collection. Layer up with comfortable knits and stylish outerwear.</p>       
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} />
          <Carousel.Caption>
            <h3>Eco-Friendly Fashion</h3>
            <p>Look good, feel good. Our sustainable collection is crafted from organic materials and designed with the planet in mind.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  )
}

export default Banner1