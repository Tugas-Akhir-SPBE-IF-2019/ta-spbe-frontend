import { lazy } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const NavBar = lazy(() => import("../../components/NavBar"));

const UploadDocumentsComponent = (props: any) => {
    return (
        <>
            <NavBar/>
            <Container>
                <Row className="text-center">
                    <Col>
                        <h1>Unggah Dokumen</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form className="text-start">
                            <Form.Group>
                                <Form.Label>Nama Institusi</Form.Label>
                                <Form.Select
                                    name="institution_name"
                                    onChange={(e) => props?.handleInputChange(e, false)}
                                >
                                    <option value="">Silakan pilih nama institusi</option>
                                    {props?.institutionOptions?.length !== 0 && (props.institutionOptions.map((item: string, index: number) => {
                                        return (
                                            <option value={item} key={index}>{item}</option>
                                        )
                                    }))}
                                </Form.Select>

                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Nomor Indikator</Form.Label>
                                <Form.Check type="radio" name="indicator_number" label="1" value="1" onChange={(e) => props?.handleInputChange(e, false)}/>
                                <Form.Check type="radio" name="indicator_number" label="2" value="2" onChange={(e) => props?.handleInputChange(e, false)}/>
                                <Form.Check type="radio" name="indicator_number" label="3" value="3" onChange={(e) => props?.handleInputChange(e, false)}/>
                                <Form.Check type="radio" name="indicator_number" label="4" value="4" onChange={(e) => props?.handleInputChange(e, false)}/>
                                <Form.Check type="radio" name="indicator_number" label="5" value="5" onChange={(e) => props?.handleInputChange(e, false)}/>
                                <Form.Check type="radio" name="indicator_number" label="6" value="6" onChange={(e) => props?.handleInputChange(e, false)}/>
                                <Form.Check type="radio" name="indicator_number" label="7" value="7" onChange={(e) => props?.handleInputChange(e, false)}/>
                                <Form.Check type="radio" name="indicator_number" label="8" value="8" onChange={(e) => props?.handleInputChange(e, false)}/>
                                <Form.Check type="radio" name="indicator_number" label="9" value="9" onChange={(e) => props?.handleInputChange(e, false)}/>
                                <Form.Check type="radio" name="indicator_number" label="10" value="10" onChange={(e) => props?.handleInputChange(e, false)}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Dokumen Pendukung</Form.Label>
                                <Form.Control type="file" accept="application/pdf" name="supporting_document" onChange={(e) => props?.handleInputChange(e, true)}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Dokumen Lama</Form.Label>
                                <Form.Control type="file" accept="application/pdf" name="old_document" onChange={(e) => props?.handleInputChange(e, true)}/>
                            </Form.Group>
                            <Row className="text-center my-3">
                                <Col>
                                    <Button as="input" variant="secondary" type="submit" value="Submit" className="mx-auto" onClick={(e) => {props?.handleUploadDocuments(e)}} />
                                </Col>
                            </Row>
                            <Row className="text-center">
                                <h1>{props?.uploadMessageResponse}</h1>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )

}

export default UploadDocumentsComponent;