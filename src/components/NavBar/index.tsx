import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';
import { getAuthToken, removeTokens } from '../../utils/general';
import { useHistory } from "react-router-dom";

const NavBar = (props: any) => {
    const authToken = getAuthToken();
    const history = useHistory();
    function logOut() {
        removeTokens();
        history.push("/");
    }
    return (
        <Navbar className="bg-purple" collapseOnSelect expand="lg" variant="dark">
            <Container className="text-white m-auto">
                <Navbar.Brand href="/">
                    <FontAwesomeIcon icon={faCertificate} className="mx-1" />
                    TA SPBE
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
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
                            <>
                                <Nav.Link href="/profile">Profile</Nav.Link>
                                <Nav.Link onClick={() => logOut()}>Logout</Nav.Link>
                            </>
                        :
                            <Nav.Link href="/login">Login</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;