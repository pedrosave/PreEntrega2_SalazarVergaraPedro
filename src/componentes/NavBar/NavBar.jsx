import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CarWidget from '../CarWidget/CarWidget';

export default function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Mi Primer Nav-Bar</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Consolas</Nav.Link>
                        <Nav.Link href="#pricing">Precio</Nav.Link>
                    </Nav>
                    <Nav>
                        <CarWidget />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
