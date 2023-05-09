import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';
import { getAuthToken } from '../../utils/general';

const NavBar = (props: any) => {
    const authToken = getAuthToken();
    return (
        <Navbar className="bg-purple" variant="dark">
            <Container className="text-white m-auto">
                <Navbar.Brand href="/">
                    <FontAwesomeIcon icon={faCertificate} className="mx-1" />
                    TA SPBE
                </Navbar.Brand>
                <Nav className="m-auto">
                    {authToken ? 
                    <>
                        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                        <Nav.Link href="/about">Tentang</Nav.Link>
                        <Nav.Link href="/tutorial">Petunjuk</Nav.Link>
                    </> : 
                    <>
                        <Nav.Link href="/about">Tentang</Nav.Link>
                        <Nav.Link href="/tutorial">Petunjuk</Nav.Link>
                    </>}
                </Nav>
                <Nav>
                    {authToken ?
                        <Nav.Link href="/profile">Profile</Nav.Link>
                    :
                        <Nav.Link href="/login">Login</Nav.Link>
                    }
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar;