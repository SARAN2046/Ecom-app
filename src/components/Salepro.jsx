import React from 'react'
import c1 from './images/c1.jpg';
import c5 from './images/c5.jpg';
import c6 from './images/c6.jpg';
const Salepro = () => {
  const products = [
    {
      id: 1,
      imgSrc: c1,
      altText: "Casual Denim Jacket",
      title: "Urban Street Hoodie",
      price: "$49.99"
    },
    {
      id: 2,
      imgSrc: c5,
      altText: "Classic Leather Jacket",
      title: "Classic Leather Jacket",
      price: "$89.99"
    },
    {
      id: 3,
      imgSrc: c6,
      altText: "Retro Bomber Jacket",
      title: "Retro Bomber Jacket",
      price: "$59.99"
    },
    {
      id: 4,
      imgSrc: c1,
      altText: "Slim Fit Blazer",
      title: "Slim Fit Blazer",
      price: "$79.99"
    },
    {
      id: 5,
      imgSrc: c5,
      altText: "Casual Pullover",
      title: "Casual Pullover",
      price: "$29.99"
    },
    {
      id: 6,
      imgSrc: c6,
      altText: "Sporty Hoodie",
      title: "Sporty Hoodie",
      price: "$39.99"
    },
    {
      id: 7,
      imgSrc: c1,
      altText: "Lightweight Windbreaker",
      title: "Lightweight Windbreaker",
      price: "$69.99"
    },
    {
      id: 8,
      imgSrc: c5,
      altText: "Comfy Sweatshirt",
      title: "Comfy Sweatshirt",
      price: "$24.99"
    },
    {
      id: 9,
      imgSrc: c6,
      altText: "Fashionable Cardigan",
      title: "Fashionable Cardigan",
      price: "$54.99"
    },
    {
      id: 10,
      imgSrc: c1,
      altText: "Stylish Coat",
      title: "Stylish Coat",
      price: "$99.99"
    }
  ];

  return (
    <div className="container">
      <div className='row mt-5 row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-sm-2 g-4'>
          {products.map(
            (y)=>(<div className="col-12">
              <div className="card product-card">
                <img src={y.imgSrc} className="card-img-top" alt="Casual Denim Jacket"/>
                <div className="card-body">
                  <h5 className="card-title">{y.title}</h5>
                  <p className="card-text fw-bold">Price: {y.price}</p>
                  <a href="/" className="btn btn-dark">Buy now</a>
                </div>
              </div>
            </div>)
          )}
        </div>
    </div>
        
  )
}

export default Salepro