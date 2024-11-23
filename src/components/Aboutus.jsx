import React from 'react'
import t3 from './images/b6.jpg'

const Aboutus = () => {
  return (
    <div class="container mt-4">
        <div class="row align-items-center">

          <h1 className="text-center mt-5">About Us</h1>

            <div class="col-md-6 text-center pt-5">
                <img src={t3} alt="Sample Image" class="img-fluid"/>
            </div>
        
            <div class="col-md-6 pt-5">
                <h2>Welcome to EliteBrand!</h2>
                <p>At EliteBrand, we are passionate about creating stylish and comfortable clothing for everyone. Our mission is to provide high-quality apparel that empowers you to express your unique style.</p>
            </div>
        </div>
    </div>

  )
}

export default Aboutus