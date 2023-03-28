import { lazy } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const NavBar = lazy(() => import("../../components/NavBar"));

const ValidateResultComponent = (props: any) => {
    return (
        <>
            <NavBar/>
            <Container>
                <Row className="text-center">
                    <Col>
                        <h1>Validasi Penilaian</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form className="text-start">
                            <Form.Group as={Row}>
                                <Form.Label column sm={3}>Domain</Form.Label>
                                <Col sm={9}>
                                    <Form.Control type="text" value="Kebijakan Internal SPBE" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm={3}>Aspek</Form.Label>
                                <Col sm={9}>
                                    <Form.Control type="text" value="Kebijakan Internal Tata Kelola SPBE" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm={3}>Indikator</Form.Label>
                                <Col sm={9}>
                                    <Form.Control type="text" value="2" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm={3}>Kesesuaian</Form.Label>
                                <Col sm={9}>
                                    <Form.Check inline type="radio" name="result_correct" label="Ya" value={1} onChange={(e) => props?.handleInputChange(e, "BOOL")}/>
                                    <Form.Check inline type="radio" name="result_correct" label="Tidak" value={0} onChange={(e) => props?.handleInputChange(e, "BOOL")}/>
                                </Col>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Level Seharusnya</Form.Label>
                                <Form.Check type="radio" name="correct_level" label="0" value={0} onChange={(e) => props?.handleInputChange(e, "INT")}/>
                                <Form.Check type="radio" name="correct_level" label="1" value={1} onChange={(e) => props?.handleInputChange(e, "INT")}/>
                                <Form.Check type="radio" name="correct_level" label="2" value={2} onChange={(e) => props?.handleInputChange(e, "INT")}/>
                                <Form.Check type="radio" name="correct_level" label="3" value={3} onChange={(e) => props?.handleInputChange(e, "INT")}/>
                                <Form.Check type="radio" name="correct_level" label="4" value={4} onChange={(e) => props?.handleInputChange(e, "INT")}/>
                                <Form.Check type="radio" name="correct_level" label="5" value={5} onChange={(e) => props?.handleInputChange(e, "INT")}/>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm={3}>Penjelasan</Form.Label>
                                <Col sm={9}>
                                    <Form.Control as="textarea" rows={5} name="explanation" onChange={(e) => props?.handleInputChange(e, "STRING")} />
                                </Col>
                            </Form.Group>
                            <Row className="text-center my-3">
                                <Col>
                                    <Button as="input" variant="secondary" type="submit" value="Submit" className="mx-auto" onClick={(e) => props?.handleSendValidation(e)} />
                                </Col>
                            </Row>
                            <Row className="text-center my-3">
                                <Col>
                                    <h1>{props?.validationMessageResponse}</h1>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )

}

export default ValidateResultComponent;