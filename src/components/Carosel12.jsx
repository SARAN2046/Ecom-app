import React from 'react'
import './Carosel12.css'
import t3 from './images/t3.jpg'

const Carosel12 = () => {
  return (
    <div className='container-fluid'>
      <div className="container pt-5">
         <h1 className='text-center pt-5'>What Our Customers Are Saying</h1>

         <div className='d-flex mt-4'>
          <div className='ms-auto'>
          <i className="bi bi-arrow-left-circle-fill m-1 text-dark"></i>
          <i className="bi bi-arrow-right-circle-fill m-1 text-dark"></i>
          </div>
        </div>

         <div className="container p-5 mt-3 position-relative mb-5 bg-dark">
          <p className='text-light'>
            EliteBrand offers stylish, minimalist pieces that blend comfort and quality seamlessly. I purchased a hoodie and joggers, both of which feel soft and have held up well through washes without fading. The sizing was mostly accurate, though the hoodie ran a bit larger than expected, so keep that in mind if you prefer a more fitted look. Their muted color palette and clean lines make these items versatile for any wardrobe. Customer service was responsive and helpful when I had a tracking issue, and shipping took about five days, with everything arriving in good condition.
          </p>
          <div className='triangle position-absolute bg-dark'></div>
         </div>
         <div className='d-flex mb-5'>
          <img src={t3} className="rounded-circle ms-4 object-fit-cover" alt="image"/>
          <div className='ms-4 mt-3'>
            <p className='m-0 fw-bold'>Mark Spencer</p>
            <p className='mt-2'>Ipsum dunat</p>
          </div>
         </div>

      </div>
    </div>
  )
}

export default Carosel12