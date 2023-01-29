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
                                    <Form.Check inline type="radio" name="validate-result" label="Ya" value="1"/>
                                    <Form.Check inline type="radio" name="validate-result" label="Tidak" value="0"/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm={3}>Penjelasan</Form.Label>
                                <Col sm={9}>
                                    <Form.Control as="textarea" rows={5} />
                                </Col>
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

export default ValidateResultComponent;