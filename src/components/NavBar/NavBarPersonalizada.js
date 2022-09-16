//Importo la hoja de estilos de NavBar
import "./NavBar.css"
//Importo CartWidget, que es componente hijo de NavBarPersonalizada
import CartWidget from "../CartWidget/CartWidget";
//Importo una imagen y le asigno el valor "pata_logo"
import pata_logo from "./logo_pata.png"
//Importo las herramientas necesarias de la Libreria React-Bootstrap.
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//Importo las funciones de React.
import { Link } from "react-router-dom";

//Creo el componente NavBarPersonalidad.
const NavBarPersonalizada = () => {

    //En este componente renderizo varios links con distintas direcciones de URL. Uno de estos links lleva cart y utiliza el componente CartWidget dentro.
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