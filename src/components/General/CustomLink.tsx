import { Nav } from 'react-bootstrap';

const CustomLink = (props: any) => {
    return (
        <Nav className="justify-content-center">
            <Nav.Item>
                <Nav.Link href="#1"><u className="text-purple">1</u></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#2"><u className="text-purple">2</u></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#3" disabled><u>3</u></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#4" disabled><u>4</u></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#5" disabled><u>5</u></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#6" disabled><u>6</u></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#7" disabled><u>7</u></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#8" disabled><u>8</u></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#9" disabled><u>9</u></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#10" disabled><u>10</u></Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default CustomLink;