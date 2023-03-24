import { Col, InputGroup, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const TextDropdown = (props: any) => {
    return (
        <>
            <Col xs={4}>
                <InputGroup className="custom-border">
                    <Form.Control
                        type="text"
                        placeholder={props.placeholder}
                        aria-label={props.placeholder}
                        aria-describedby="addon-dropdown"
                        className="px-3 py-2 border border-0 shadow-none"
                    />
                    <InputGroup.Text id="addon-dropdown" className="px-3 py-2 bg-white border-0">
                        <FontAwesomeIcon icon={faAngleDown} className="text-purple" />
                    </InputGroup.Text>
                </InputGroup>
            </Col>
        </>
    )
}

export default TextDropdown;