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
                                <Form.Control type="text" placeholder="Tuliskan nama institusi" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Nomor Indikator</Form.Label>
                                <Form.Check type="radio" name="indicator-num" label="1" value="1"/>
                                <Form.Check type="radio" name="indicator-num" label="2" value="2"/>
                                <Form.Check type="radio" name="indicator-num" label="3" value="3"/>
                                <Form.Check type="radio" name="indicator-num" label="4" value="4"/>
                                <Form.Check type="radio" name="indicator-num" label="5" value="5"/>
                                <Form.Check type="radio" name="indicator-num" label="6" value="6"/>
                                <Form.Check type="radio" name="indicator-num" label="7" value="7"/>
                                <Form.Check type="radio" name="indicator-num" label="8" value="8"/>
                                <Form.Check type="radio" name="indicator-num" label="9" value="9"/>
                                <Form.Check type="radio" name="indicator-num" label="10" value="10"/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Dokumen Pendukung</Form.Label>
                                <Form.Control type="file" accept="application/pdf"/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Dokumen Lama</Form.Label>
                                <Form.Control type="file" accept="application/pdf"/>
                            </Form.Group>
                            <Row className="text-center my-3">
                                <Col>
                                    <Button as="input" variant="secondary" type="submit" value="Submit" className="mx-auto" />
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )

}

export default UploadDocumentsComponent;