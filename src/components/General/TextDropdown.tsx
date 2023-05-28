import { Col, InputGroup, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import DateRangePicker from 'react-bootstrap-daterangepicker';

const TextDropdown = (props: any) => {
    return (
        <>
            <Col xs={props?.xs} lg={props?.lg} className={props?.text && "my-3"}>
                {props?.options &&
                    <Form.Select className="custom-border shadow-none text-purple"
                        name={props?.name}
                        onChange={props?.onChange}
                    >
                        <option value="">Silakan pilih nama institusi</option>
                        {props?.options?.length !== 0 && (props.options.map((item: any, index: number) => {
                            return (
                                <option value={item.institution_name} key={index}>{item.institution_name}</option>
                            )
                        }))}
                    </Form.Select>
                }
                {props?.dict &&
                    <Form.Select className="custom-border shadow-none text-purple py-2 px-3"
                        name={props?.name}
                        onChange={props?.onChange}
                    >
                        <option value="">{props?.placeholder}</option>
                        {props?.dict?.length !== 0 && (props.dict.map((item: any, index: number) => {
                            return (
                                <option value={item.value} key={index}>{item.text}</option>
                            )
                        }))}
                    </Form.Select>
                }
                {props?.items &&
                    <Form.Select className="custom-border shadow-none text-purple py-3 px-2"
                        name={props?.name}
                        onChange={props?.onChange}
                    >
                        <option value="" className="text-muted">{props?.placeholder}</option>
                        {props?.items?.length !== 0 && (props.items.map((item: any, index: number) => {
                            return (
                                <option value={item.id} key={index}>{item.institution_name}</option>
                            )
                        }))}
                    </Form.Select>
                }
                {props?.text &&
                    <InputGroup className="custom-border">
                        <Form.Control
                            type="text"
                            name={props?.name}
                            placeholder={props.placeholder}
                            aria-label={props.placeholder}
                            aria-describedby="addon-dropdown"
                            className="px-3 py-2 border border-0 shadow-none"
                            onChange={props?.onChange}
                        />
                        <InputGroup.Text id="addon-dropdown" className="px-3 py-2 bg-white border-0">
                            <FontAwesomeIcon icon={faAngleDown} className="text-purple" />
                        </InputGroup.Text>
                    </InputGroup>
                }
                {props?.date &&
                    <InputGroup className="custom-border">
                        <DateRangePicker
                            initialSettings={{
                                autoApply: true,
                                locale: {
                                    format: 'YYYY-MM-DD'
                                }
                            }}
                            onApply={props?.onChange}
                        >
                            <Form.Control
                                type="text"
                                name={props?.name}
                                placeholder={props.placeholder}
                                aria-label={props.placeholder}
                                aria-describedby="addon-dropdown"
                                className="px-3 py-2 border border-0 shadow-none"
                            />
                        </DateRangePicker>
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