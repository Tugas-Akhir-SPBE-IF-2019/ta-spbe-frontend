import { Nav } from 'react-bootstrap';

const CustomLink = (props: any) => {
    const default_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <Nav className="justify-content-center">
            {props?.link_list && (default_list.map((item: number, index: number) => {
                return (
                    <>{props?.link_list.includes(item)
                    ?
                        <Nav.Item key={index}>
                            <Nav.Link href={`#${item}`}><u className="text-purple">{item}</u></Nav.Link>
                        </Nav.Item>
                    :
                        <Nav.Item key={index}>
                            <Nav.Link href={`#${item}`} disabled><u>{item}</u></Nav.Link>
                        </Nav.Item>
                    }</>
                )
            }))}
        </Nav>
    )
}

export default CustomLink;