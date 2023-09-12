import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavbarComponent(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar collapseOnSelect expand="md" light className="navbar-container">
      <Container>
        <Navbar.Brand href="/">Rental Car</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={handleShow}
        />
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Rental Car</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav>
              <Nav.Link href="/our-services/">Our Services</Nav.Link>
              <Nav.Link href="/why-us/">Why Us</Nav.Link>
              <Nav.Link href="/testimonial/">Testimonial</Nav.Link>
              <Nav.Link href="FAQ">FAQ</Nav.Link>
              <Nav.Link href="/cart/">Cart</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link href="/our-services/">Our Services</Nav.Link>
            <Nav.Link href="/why-us/">Why Us</Nav.Link>
            <Nav.Link href="/testimonial/">Testimonial</Nav.Link>
            <Nav.Link href="FAQ">FAQ</Nav.Link>
            <Nav.Link href="/cart/">Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
