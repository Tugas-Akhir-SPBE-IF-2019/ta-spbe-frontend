import { Col, InputGroup, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const TextDropdown = (props: any) => {
    return (
        <>
            <Col xs={props?.xs}>
                {props?.options
                ?
                    <Form.Select className="custom-border shadow-none text-purple"
                        name={props?.name}
                        onChange={props?.onChange}
                    >
                        <option value="">Silakan pilih nama institusi</option>
                        {props?.options?.length !== 0 && (props.options.map((item: string, index: number) => {
                            return (
                                <option value={item} key={index}>{item}</option>
                            )
                        }))}
                    </Form.Select>
                :
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
                }
            </Col>
        </>
    )
}

export default TextDropdown;