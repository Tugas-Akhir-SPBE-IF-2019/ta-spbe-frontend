import { Container, Nav, Navbar } from 'react-bootstrap';

const NavBar = (props: any) => {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="/">TA SPBE</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/dashboard">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/tutorial">Tutorial</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="/upload">Evaluation</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar;