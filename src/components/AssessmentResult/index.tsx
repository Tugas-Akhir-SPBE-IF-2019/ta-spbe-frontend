import { lazy } from 'react';
import { Row, Col, Image, Carousel } from 'react-bootstrap';
import dummy_img from "../../assets/logo-itb.jpg";
import dummy_img2 from "../../assets/about-us.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faClone } from '@fortawesome/free-solid-svg-icons';

const NavBar = lazy(() => import("../../components/NavBar"));
const BlockLabel = lazy(() => import("../../components/General/BlockLabel"));
const StatusLabel = lazy(() => import("../../components/General/StatusLabel"));
const PurpleButton = lazy(() => import("../../components/General/PurpleButton"));
const CustomLink = lazy(() => import("../../components/General/CustomLink"));
const CircledNumber = lazy(() => import("../../components/General/CircledNumber"));


const AssessmentResultComponent = (props: any) => {
    return (
        <>
            <NavBar/>
            <Row>
                <Col>
                    <Row className="custom-shadow custom-border m-3 p-3">
                        <Col>
                            <Row>
                                <Col className="d-flex align-items-center my-2">
                                    <BlockLabel text="Nama Institusi" />
                                    <h6>{props?.assessmentResultResponse?.institution_name}</h6>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="d-flex align-items-center my-2">
                                    <BlockLabel text="Tanggal" />
                                    <h6>{props?.assessmentResultResponse?.submitted_date}</h6>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="d-flex align-items-center my-2">
                                    <BlockLabel text="Status" />
                                    <h6>{props?.assessmentResultResponse?.assessment_status}</h6>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Image src={dummy_img} className="width-label d-block m-auto"/>
                        </Col>
                        <Col className="d-flex align-items-center justify-content-center">
                            <Row>
                                <Col>
                                    <PurpleButton text="Unduh Hasil Penilaian" />
                                </Col>
                            </Row>
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
                    <Row className="mx-5">
                        <h6 className="fw-bold">Hasil</h6>
                    </Row>
                    <Row className="custom-shadow custom-border m-3 p-3">
                        <Col>
                            <Row className="my-3">
                                <Col xs={4}>
                                    <h6>Domain</h6>
                                </Col>
                                <Col>
                                    <p>{props?.assessmentResultResponse?.result?.domain}</p>
                                </Col>
                            </Row>
                            <Row className="my-3">
                                <Col xs={4}>
                                    <h6>Aspek</h6>
                                </Col>
                                <Col>
                                    <p>{props?.assessmentResultResponse?.result?.aspect}</p>
                                </Col>
                            </Row>
                            <Row className="align-items-center">
                                <Col xs={4} className="mt-2 mb-3">
                                    <h6>Indikator</h6>
                                </Col>
                                <Col>
                                    <CircledNumber number={props?.assessmentResultResponse?.result?.indicator_number} />
                                </Col>
                            </Row>
                            <Row className="align-items-center">
                                <Col xs={4} className="my-2">
                                    <h6>Level</h6>
                                </Col>
                                <Col>
                                    <CircledNumber number={props?.assessmentResultResponse?.result?.level} />
                                </Col>
                            </Row>
                            <Row className="my-3">
                                <Col xs={4}>
                                    <h6>Data Dukung</h6>
                                </Col>
                                <Col>
                                    <p>{props?.assessmentResultResponse?.result?.support_document}</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row className="my-3">
                                <h6>Penjelasan</h6>
                            </Row>
                            <Row className="bg-light-purple custom-border p-2">
                                <Col>
                                    <p className="text-break">{props?.assessmentResultResponse?.result?.explanation}</p>
                                </Col>
                                <Col xs={1}>
                                    <FontAwesomeIcon icon={faClone} className="pointer text-purple" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <h6 className="fw-bold text-center">Bukti dalam Dokumen</h6>
                    </Row>
                    <Row className="justify-content-center my-3">
                        <Col xs={6}>
                            <Carousel variant="dark" slide={false}>
                                <Carousel.Item>
                                    <Image src={dummy_img} className="d-block w-75 mx-auto mb-3"/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image src={dummy_img2} className="d-block w-75 mx-auto mb-3"/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image src={dummy_img} className="d-block w-75 mx-auto mb-3"/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image src={dummy_img2} className="d-block w-75 mx-auto mb-3"/>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col xs={2}>
                            <PurpleButton text="Validasi Hasil" />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )

}

export default AssessmentResultComponent;