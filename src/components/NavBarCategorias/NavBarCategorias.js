//Importo la hoja de estilos de NavBarCategorias
import "./NavBarCategorias.css"
//Importo las herramientas de React-Bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//Importo las funciones de React
import { Link } from "react-router-dom";

//Creo el componente NavBarCategorias el cual es un grupo de links que lleva a distintas direcciones que coinciden con el param usado por la variable categoria. De esta forma, la funcionalidad generada en ItemList surte efecto.
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