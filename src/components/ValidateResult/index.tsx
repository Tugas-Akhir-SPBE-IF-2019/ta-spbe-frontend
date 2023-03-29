import { lazy } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

const NavBar = lazy(() => import("../../components/NavBar"));
const CircledNumber = lazy(() => import("../../components/General/CircledNumber"));
const BlockLabel = lazy(() => import("../../components/General/BlockLabel"));
const CustomRadio = lazy(() => import("../../components/General/CustomRadio"));
const CustomLink = lazy(() => import("../../components/General/CustomLink"));
const PurpleButton = lazy(() => import("../../components/General/PurpleButton"));

const ValidateResultComponent = (props: any) => {
    return (
        <>
            <NavBar/>
            <Row className="p-3">
                <Col>
                    <Row>
                        <Col className="d-flex align-items-center my-2">
                            <BlockLabel text="Domain" />
                            <h6>Kebijakan Internal SPBE</h6>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex align-items-center my-2">
                            <BlockLabel text="Aspek" />
                            <h6>Kebijakan Internal Tata Kelola SPBE</h6>
                        </Col>
                    </Row>
                    <Row className="custom-border custom-shadow my-3" id="1">
                        <Col>
                            <Row className="align-items-center mt-4">
                                <Col xs={4}>
                                    <h6>Indikator</h6>
                                </Col>
                                <Col className="p-0">
                                    <CircledNumber number="1" />
                                </Col>
                            </Row>
                            <Row className="align-items-center my-5">
                                <Col xs={4}>
                                    <h6>Kesesuaian Hasil</h6>
                                </Col>
                                <Col className="d-flex align-items-center p-0">
                                    <CustomRadio
                                        label="Ya"
                                        id="is_correct"
                                        name="is_correct"
                                    />
                                </Col>
                                <Col className="d-flex align-items-center p-0">
                                    <CustomRadio
                                        label="Tidak"
                                        id="is_correct"
                                        name="is_correct"
                                    />
                                </Col>
                            </Row>
                            <Row className="align-items-center my-5">
                                <Col xs={4}>
                                    <h6>Level Seharusnya</h6>
                                </Col>
                                <Col className="d-flex align-items-center p-0">
                                    <CustomRadio
                                        label="1"
                                        id="correct_level"
                                        name="correct_level"
                                    />
                                </Col>
                                <Col className="d-flex align-items-center p-0">
                                    <CustomRadio
                                        label="2"
                                        id="correct_level"
                                        name="correct_level"
                                    />
                                </Col>
                                <Col className="d-flex align-items-center p-0">
                                    <CustomRadio
                                        label="3"
                                        id="correct_level"
                                        name="correct_level"
                                    />
                                </Col>
                                <Col className="d-flex align-items-center p-0">
                                    <CustomRadio
                                        label="4"
                                        id="correct_level"
                                        name="correct_level"
                                    />
                                </Col>
                                <Col className="d-flex align-items-center p-0">
                                    <CustomRadio
                                        label="5"
                                        id="correct_level"
                                        name="correct_level"
                                    />
                                </Col>
                            </Row>
                        </Col>
                        <Col className="mt-4">
                            <Form.Control as="textarea" rows={8} placeholder="Berikan penjelasan..." />
                        </Col>
                    </Row>
                    <Row className="custom-border custom-shadow my-3" id="2">
                        <Col>
                            <Row className="align-items-center mt-4">
                                <Col xs={4}>
                                    <h6>Indikator</h6>
                                </Col>
                                <Col className="p-0">
                                    <CircledNumber number="2" />
                                </Col>
                            </Row>
                            <Row className="align-items-center my-5">
                                <Col xs={4}>
                                    <h6>Kesesuaian Hasil</h6>
                                </Col>
                                <Col className="d-flex align-items-center p-0">
                                    <CustomRadio
                                        label="Ya"
                                        id="is_correct"
                                        name="is_correct"
                                    />
                                </Col>
                                <Col className="d-flex align-items-center p-0">
                                    <CustomRadio
                                        label="Tidak"
                                        id="is_correct"
                                        name="is_correct"
                                    />
                                </Col>
                            </Row>
                            <Row className="align-items-center my-5">
                                <Col xs={4}>
                                    <h6>Level Seharusnya</h6>
                                </Col>
                                <Col className="d-flex align-items-center p-0">
                                    <CustomRadio
                                        label="1"
                                        id="correct_level"
                                        name="correct_level"
                                    />
                                </Col>
                                <Col className="d-flex align-items-center p-0">
                                    <CustomRadio
                                        label="2"
                                        id="correct_level"
                                        name="correct_level"
                                    />
                                </Col>
                                <Col className="d-flex align-items-center p-0">
                                    <CustomRadio
                                        label="3"
                                        id="correct_level"
                                        name="correct_level"
                                    />
                                </Col>
                                <Col className="d-flex align-items-center p-0">
                                    <CustomRadio
                                        label="4"
                                        id="correct_level"
                                        name="correct_level"
                                    />
                                </Col>
                                <Col className="d-flex align-items-center p-0">
                                    <CustomRadio
                                        label="5"
                                        id="correct_level"
                                        name="correct_level"
                                    />
                                </Col>
                            </Row>
                        </Col>
                        <Col className="mt-4">
                            <Form.Control as="textarea" rows={8} placeholder="Berikan penjelasan..." />
                        </Col>
                    </Row>
                    <Row className="my-2">
                        <Col>
                            <Row>
                                <Col className="d-flex align-items-center justify-content-center">
                                    <h6 className="width-fit me-2">Indikator</h6>
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <CustomLink />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col xs={2}>
                            <PurpleButton text="Kirim" />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )

}

export default ValidateResultComponent;