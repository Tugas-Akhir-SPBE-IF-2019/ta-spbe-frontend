import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';

const CustomUpload = (props: any) => {
    const hiddenFileInput = React.useRef<HTMLInputElement>(null);
    const handleClick = (e) => {
        hiddenFileInput.current?.click();
    };

    return (
        <>
            <Row className="text-center upload py-4 mb-2" onClick={handleClick}>
                <Col>
                    <FontAwesomeIcon icon={faCloudArrowUp} size="6x" className="text-purple mb-2" />
                    <p className="fw-bold">Unggah Dokumen Disini</p>
                </Col>
            </Row>
            <Form.Control
                type="file"
                multiple
                ref={hiddenFileInput}
                name={props?.name}
                className="d-none"
                onChange={props?.onChange}
            />
        </>
    )
}

export default CustomUpload;