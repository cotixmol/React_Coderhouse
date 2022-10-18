import "./NavBarPersonalizada.css"

import CartWidget from "../CartWidget/CartWidget";

import pata_logo from "./logo_pata.png"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link, NavLink } from "react-router-dom";

const NavBarPersonalizada = () => {

    return(
      <>
        <div className="my_navbar">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Nav className="me-auto">

                <Nav.Link>
                  <Link style={{textDecoration:"none"}} to="/">
                    <span className="navbarpersonalizada_titulo">Mascotas Molinengo </span><img className="pata_logo" src={pata_logo} alt="Logo"/>
                  </Link>
                </Nav.Link>

                <Nav.Link className="menu">
                  <NavLink to="/" className={({isActive}) => isActive ? "activeMenu" : "inactiveMenu"}>
                    <span className="menu">Inicio</span>
                  </NavLink>
                </Nav.Link>

                <Nav.Link>
                  <NavLink to="/cart" className={({isActive}) => isActive ? "activeCart" : "inactiveCart"}>
                    <CartWidget></CartWidget>
                  </NavLink>
                </Nav.Link>

              </Nav>
            </Container>
          </Navbar>
        </div>
      </>
  );
}

export default NavBarPersonalizada;