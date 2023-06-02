import React from 'react';
import { Row, Col, Form, Image } from 'react-bootstrap';
import edit_img from "../../assets/edit-profpic.png";


const PicUpload = (props: any) => {
    const hiddenFileInput = React.useRef<HTMLInputElement>(null);
    const handleClick = (e) => {
        hiddenFileInput.current?.click();
    };

    return (
        <>
            <Col xs={12} md={4} className="text-center pointer" onClick={handleClick}>
                <Image src={edit_img} />
                <p>{props?.value}</p>
            </Col>
            <Form.Control
                type="file"
                value=""
                ref={hiddenFileInput}
                name={props?.name}
                className="d-none"
                onChange={props?.onChange}
                accept="image/*"
            />
        </>
    )
}

export default PicUpload;