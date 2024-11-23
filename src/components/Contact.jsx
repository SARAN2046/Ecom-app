// src/components/ContactUs.js
import React from 'react';
import { Container} from 'react-bootstrap';

const ContactUs = () => {
  return (
    <Container className="my-5 text-center">
      <h1 className="mb-4">Contact Us</h1>
      <p>We're here to help and would love to hear from you. Whether you have a question about our products, need assistance with an order, or just want to share your feedback, our team is ready to assist.</p>
      
      <h5 className="mt-4">Support</h5>
      <p>
          Instagram Support: <a href='#'>Click Here</a>
      </p>
      <p>
          Whatsapp Support: <a href='#'>Click Here</a>
      </p>

      <h5 className="mt-4">Operating Hours</h5>
      <p>Monday to Saturday, 10:00 AM - 7:00 PM</p>

      <h5 className="mt-4">Returns and Exchanges</h5>
      <p>For return and exchange, please visit our Returns & Exchanges page.</p>

      <p className="mt-4">Thank you for choosing EliteBrand. We're looking forward to assisting you!</p>
    </Container>
  );
};

export default ContactUs;
