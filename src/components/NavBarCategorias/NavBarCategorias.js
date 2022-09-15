import "./NavBarCategorias.css"


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

const NavBarCategorias = () => {
    return(
      <>
      <div className="my_navbarcategorias">
        <Navbar bg="light" variant="light">
          <Container>
            Categorias:
            <Nav className="me-auto">
            <Nav.Link>
                <Link style={{textDecoration: 'none'}} to="/">Mostrar todo</Link>
              </Nav.Link>
              <Nav.Link>
                <Link style={{textDecoration: 'none'}} to="/productos/perros">Perros</Link>
              </Nav.Link>
              <Nav.Link>
                <Link style={{textDecoration: 'none'}} to="/productos/gatos">Gatos</Link>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      </>
  );
}

export default NavBarCategorias;