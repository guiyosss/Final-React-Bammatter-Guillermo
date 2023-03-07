import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';

function NavBarBootstrap() {
return (
    <Navbar bg="dark" variant='dark' expand="lg">
        <Container>
            <Navbar.Brand href="#home">DarknesDC</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="#Login">Login</Nav.Link>
                <NavDropdown title="Tienda" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Productos</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                    Sección Gaming
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Empresas</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                    Nosotros
                    </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#Cart"><CartWidget/></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);
}

export default NavBarBootstrap;
