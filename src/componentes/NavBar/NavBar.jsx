import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import CarWidget from '../CarWidget/CarWidget';

export default function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                {/* <Navbar.Brand href="#home">Mi Primer Nav-Bar</Navbar.Brand> */}
                <NavLink to='/'> React</NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="me-auto">
                        <NavLink to="/categoria/PlayStation" className={({ isActive }) => isActive ? 'btn btn-primary' : 'btn btn-outline-primary'}>PlayStation</NavLink>
                        <NavLink to="/categoria/XBOX" className={({ isActive }) => isActive ? 'btn btn-primary' : 'btn btn-outline-primary'}>XBOX</NavLink>
                        <NavLink to="/categoria/Nintendo" className={({ isActive }) => isActive ? 'btn btn-primary' : 'btn btn-outline-primary'}>Nintendo</NavLink>
                    </Nav>

                    <Nav>
                        <Link to='/cart'>
                            <CarWidget />
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
