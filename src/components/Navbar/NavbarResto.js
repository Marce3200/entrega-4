import Container from "react-bootstrap/Container";
import "./navbar.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import miniLogo from "../Home/img/logo_mini_2.png";

const NavbarResto = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img className="mini-logo" src={miniLogo} alt="logo restaurant" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto links-footer">
            <Nav.Link href="/about">Nosotros</Nav.Link>
            <Nav.Link href="/menu">Menú</Nav.Link>
            <Nav.Link href="/reservas">Reservas</Nav.Link>
            <Nav.Link href="blog">Blog</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarResto;
