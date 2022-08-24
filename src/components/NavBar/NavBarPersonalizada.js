import "./NavBar.css"

import CartWidget from "../CartWidget/CartWidget";

import pata_logo from "./logo_pata.png"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBarPersonalizada = () => {
    return(
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <img className="pata_logo" src={pata_logo} alt="Logo"></img>
            <Navbar.Brand href="#home">Mascotas</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#ourstore">Nuestra Tienda</Nav.Link>
              <Nav.Link href="#contact">Contacto</Nav.Link>
              <Nav.Link href="#cart"><CartWidget></CartWidget></Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
  );
}

export default NavBarPersonalizada;