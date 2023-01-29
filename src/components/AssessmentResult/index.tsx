import { lazy } from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import dummy_img from "../../assets/logo-itb.jpg";

const NavBar = lazy(() => import("../../components/NavBar"));

const AssessmentResultComponent = (props: any) => {
    return (
        <>
            <NavBar/>
            <Container>
                <Row className="text-center">
                    <Col>
                        <h1>Hasil Penilaian</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form className="text-start">
                            <Form.Group as={Row}>
                                <Form.Label column sm={3}>Nama Institusi</Form.Label>
                                <Col sm={9}>
                                    <Form.Control type="text" value="Kabupaten Phakphak Barat" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm={3}>Tanggal</Form.Label>
                                <Col sm={9}>
                                    <Form.Control type="text" value="01-01-2023" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm={3}>Status</Form.Label>
                                <Col sm={9}>
                                    <Form.Control type="text" value="Selesai" />
                                </Col>
                            </Form.Group>
                            <Form.Label>Hasil:</Form.Label>
                            <Container className="my-3 py-3 border">
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
                                    <Form.Label column sm={3}>Level</Form.Label>
                                    <Col sm={9}>
                                        <Form.Control type="text" value="0" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column sm={3}>Penjelasan</Form.Label>
                                    <Col sm={9}>
                                        <Form.Control type="text" value="WIP" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column sm={3}>Data Dukung</Form.Label>
                                    <Col sm={9}>
                                        <Image src={dummy_img} />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column sm={3}>Bukti dalam Dokumen</Form.Label>
                                    <Col sm={9}>
                                        <Form.Control type="text" value="WIP" />
                                    </Col>
                                </Form.Group>
                            </Container>
                            <Row className="text-center my-3">
                                <Col>
                                    <Button href="/validate" variant="secondary" type="submit" className="mx-auto">Validasi</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )

}

export default AssessmentResultComponent;