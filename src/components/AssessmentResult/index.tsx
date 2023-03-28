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
                                    <Form.Control type="text" value={props?.assessmentResultResponse?.institution_name} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm={3}>Tanggal</Form.Label>
                                <Col sm={9}>
                                    <Form.Control type="text" value={props?.assessmentResultResponse?.submitted_date} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm={3}>Status</Form.Label>
                                <Col sm={9}>
                                    {props?.assessmentResultResponse?.assessment_status === 2 &&
                                        <Form.Control type="text" value="Selesai" />
                                    }
                                    {props?.assessmentResultResponse?.assessment_status === 3 &&
                                        <Form.Control type="text" value="Sudah Divalidasi" />
                                    }
                                </Col>
                            </Form.Group>
                            <Form.Label>Hasil:</Form.Label>
                            <Container className="my-3 py-3 border">
                                <Form.Group as={Row}>
                                    <Form.Label column sm={3}>Domain</Form.Label>
                                    <Col sm={9}>
                                        <Form.Control type="text" value={props?.assessmentResultResponse?.result?.domain} />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column sm={3}>Aspek</Form.Label>
                                    <Col sm={9}>
                                        <Form.Control type="text" value={props?.assessmentResultResponse?.result?.aspect} />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column sm={3}>Indikator</Form.Label>
                                    <Col sm={9}>
                                        <Form.Control type="text" value={props?.assessmentResultResponse?.result?.indicator_number} />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column sm={3}>Level</Form.Label>
                                    <Col sm={9}>
                                        <Form.Control type="text" value={props?.assessmentResultResponse?.result?.level} />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column sm={3}>Penjelasan</Form.Label>
                                    <Col sm={9}>
                                        <Form.Control type="text" value={props?.assessmentResultResponse?.result?.explanation} />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column sm={3}>Data Dukung</Form.Label>
                                    <Col sm={9}>
                                        <Image src={props?.assessmentResultResponse?.result?.support_document} />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column sm={3}>Bukti dalam Dokumen</Form.Label>
                                    <Col sm={9}>
                                        {props?.handleParseHTML(props?.assessmentResultResponse?.result?.proof)}
                                    </Col>
                                </Form.Group>
                            </Container>
                            <Row className="text-center my-3">
                                <Col>
                                    <Button href={`/validate/${props?.assessmentId}`} variant="secondary" type="submit" className="mx-auto">Validasi</Button>
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