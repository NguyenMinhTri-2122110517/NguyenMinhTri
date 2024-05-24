import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { CiSearch } from 'react-icons/ci';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import logo from './assets/logo.webp';
import slider from './assets/slider.webp';
import slider1 from './assets/slider1.webp';

function App() {
  const hoten = "Nguyen Minh Tri"; // Keeping it for potential future use

  return (
    <>
      <Navbar bg="white" expand="lg">
        <Container>
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="me-auto">
              <Nav.Link href="#" active>Home</Nav.Link>
              <Nav.Link href="#">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Action</NavDropdown.Item>
                <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>Disabled</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
              <Button variant="outline-success">Search</Button>
            </Form>
            <div className="d-flex align-items-center ms-2">
              <CiSearch className="me-2" />
              <FaShoppingCart className="me-2" />
              <FaUser className="me-2" />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <main>
        <div className="slider">
          <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={slider} className="d-block w-100" alt="slider" />
              </div>
              <div className="carousel-item">
                <img src={slider1} className="d-block w-100" alt="slider1" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
