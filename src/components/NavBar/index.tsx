import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';

const NavBar = (props: any) => {
    return (
        <Navbar className="bg-purple" variant="dark">
            <Container className="text-white">
                <Navbar.Brand href="/">
                    <FontAwesomeIcon icon={faCertificate} className="mx-1" />
                    TA SPBE
                </Navbar.Brand>
                <Nav className="m-auto">
                    <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                    <Nav.Link href="/about">Tentang</Nav.Link>
                    <Nav.Link href="/tutorial">Petunjuk</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="/upload">Evaluasi</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar;