import { Container, Nav, Navbar } from 'react-bootstrap';

const NavBar = (props: any) => {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">TA SPBE</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">About</Nav.Link>
                    <Nav.Link href="#pricing">Tutorial</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#pricing">Evaluation</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar;