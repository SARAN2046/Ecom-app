import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './Navbar1.css'
import { Link } from 'react-router-dom';


function Navbar1() {
  return (
    <Navbar collapseOnSelect expand="lg  fixed-top" className="bg-dark">
      <Container>
        <Navbar.Brand as={Link} to="/" className='roboto-bold text-light dancing-script fs-3'>EliteBrand</Navbar.Brand>
        <Navbar.Toggle className='bg-white' aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto me-auto">
          <Nav.Link as={Link} to="/" className='text-light px-4 Product-card1'>Home</Nav.Link>
            <Nav.Link as={Link} to="/products" className='text-light px-4 Product-card1'>Products</Nav.Link>
            <Nav.Link as={Link} to="/about" className='text-light px-4 Product-card1'>About us</Nav.Link>
            <Nav.Link as={Link} to="/contact" className='text-light px-4 Product-card1'>Contact us</Nav.Link>
          </Nav>
          <Nav>
          <Button as={Link} to="/sign" variant="light product-card">Sign in</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;