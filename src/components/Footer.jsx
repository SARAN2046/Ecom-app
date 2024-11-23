import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <footer className="bg-dark text-light pt-5 mt-4 pb-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5 className="text-uppercase">About Us</h5>
              <p>
                At EliteBrand, we are passionate about creating stylish and comfortable clothing for everyone. Our mission is to provide high-quality apparel that empowers you to express your unique style.
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="text-uppercase">Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                    <Link to="/" className="text-light text-decoration-none">Home</Link>
                  </li>
                  <li>
                    <Link to="/products" className="text-light text-decoration-none">Products</Link>
                  </li>
                  <li>
                    <Link to="/about" className="text-light text-decoration-none">About Us</Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-light text-decoration-none">Contact</Link>
                  </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5 className="text-uppercase">Contact Us</h5>
              <p>Email: <a href="mailto:info@elitebrand.com" className="text-light">info@elitebrand.com</a></p>
              <p>Phone: <a href="tel:+123456789" className="text-light">+1 234 567 89</a></p>
            </div>
          </div>
          <div className="text-center mt-4">
            <h5 className="text-uppercase">Follow Us</h5>
            <a href="#" className="text-light me-2"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-light me-2"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-light me-2"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-light"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <div className="text-center mt-4">
            <p className="mb-0">&copy; 2024 EliteBrand. All rights reserved.</p>
          </div>
        </div>
     </footer>

    </div>
  )
}

export default Footer