import { Row, Col, InputGroup, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Search = (props: any) => {
    return (
        <>
            <Row className="mt-5 mb-3">
                <Col xs={12} lg={6}>
                    <InputGroup className="custom-border">
                        <Form.Control
                            type="text"
                            placeholder="Cari Nama Instansi"
                            aria-label="Cari Nama Instansi"
                            aria-describedby="addon-search"
                            className="px-3 py-2 border border-0 shadow-none"
                            name={props?.name}
                            onChange={props?.onChange}
                            value={props?.value}
                        />
                        <InputGroup.Text id="addon-search" className="px-3 py-2 bg-white border-0">
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-purple" onClick={props?.onBlur} />
                        </InputGroup.Text>
                    </InputGroup>
                </Col>
            </Row>
        </>
    )
}

export default Search;