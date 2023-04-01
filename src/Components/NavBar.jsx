import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

function NavBarBootstrap() {
return (
    <Navbar bg="dark" variant='dark' expand="lg">
        <Container>
            <Navbar.Brand as={Link} to={`/`}>DarknesDC</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link as={Link} to={`/Login`}>Login</Nav.Link>
                <NavDropdown title="Categorias" id="basic-nav-dropdown">
                    {/* como hay problemas con el link de react router dom al dropdown se debe agregar etiqueta
                    AS={Link} seguido de to={"laruta"} */}
                    {/* <link To={`/category/${"Almacen"}`}></link> */}
                        <NavDropdown.Item as={Link} to={`/category/${"Almacen"}`}>Almacen</NavDropdown.Item>
                    
                    {/* <link To={`/category/${"Ferreteria"}`}></link> */}
                        <NavDropdown.Item as={Link} to={`/category/${"Ferreteria"}`}>Ferreteria</NavDropdown.Item>
                    
                    {/* <link To={`/category/${"Indumentaria"}`}></link> */}
                    <NavDropdown.Item as={Link} to={`/category/${"Indumentaria"}`}>Indumentaria</NavDropdown.Item>
                    
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                    Nosotros
                    </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to={`/Cart`}><CartWidget/></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);
}

export default NavBarBootstrap;
