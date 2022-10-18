import "./NavBarCategorias.css"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from "react-router-dom";

const NavBarCategorias = () => {

    const StaticVars = [{
      url:"perros",
      name:"Perros"
    },
    {
      url:"gatos",
      name:"Gatos"
    },
    {
      url:"/",
      name:"Mostrar todo"
    }]

    return(
      <>
      <div className="my_navbarcategorias">
        <Navbar bg="light" variant="light">
          <Container>
            Categorias:
            <Nav className="me-auto">
            {
              StaticVars.map((elm)=>{
                return(
                  <Nav.Link>
                    <Link style={{textDecoration: 'none'}} to={elm.url}>{elm.name}</Link>
                  </Nav.Link>
                )
              })
            }
            </Nav>
          </Container>
        </Navbar>
      </div>
      </>
  );
}

export default NavBarCategorias;