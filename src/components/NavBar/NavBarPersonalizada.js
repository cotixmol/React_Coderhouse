import "./NavBar.css"

import CartWidget from "../CartWidget/CartWidget";

import pata_logo from "./logo_pata.png"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

const NavBarPersonalizada = () => {
    return(
      <>
      <div className="my_navbar">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Nav className="me-auto">
              <Nav.Link>
                <Link style={{textDecoration: 'none'}} to="/"><img className="pata_logo" src={pata_logo} alt="Logo"></img></Link>
              </Nav.Link>
              <Nav.Link>
                <Link style={{textDecoration: 'none'}} to="/"><span className="menu">Inicio</span></Link>
              </Nav.Link>
              <Nav.Link>
                <Link style={{textDecoration: 'none'}} to="/nosotros"><span className="menu">Contacto</span></Link>
              </Nav.Link>
              <Nav.Link>
                <Link style={{textDecoration: 'none'}} to="/cart"><CartWidget></CartWidget></Link>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      </>
  );
}

export default NavBarPersonalizada;