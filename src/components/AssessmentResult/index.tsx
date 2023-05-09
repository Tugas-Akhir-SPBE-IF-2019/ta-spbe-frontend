import { lazy } from 'react';
import { Row, Col, Image, Carousel, OverlayTrigger, Popover, Tooltip } from 'react-bootstrap';
import dummy_img from "../../assets/logo-itb.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faClone } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { formatDate } from '../../utils/helper';

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
                                    <h6>{formatDate(props?.assessmentResultResponse?.submitted_date)}</h6>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="d-flex align-items-center my-2">
                                    <BlockLabel text="Status" />
                                    <StatusLabel text={props?.assessmentResultResponse?.assessment_status} />
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Image src={dummy_img} className="width-label d-block m-auto"/>
                        </Col>
                        <Col className="d-flex align-items-center justify-content-center">
                            <Row>
                                <Col>
                                    <PurpleButton text="Unduh Hasil Penilaian" onClick={() => props?.handleDownloadFile()} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="py-3 my-3 sticky-top bg-white">
                        <Col>
                            <Row>
                                <OverlayTrigger
                                    placement="bottom"
                                    overlay={
                                        <Tooltip>
                                            Tekan nomor-nomor di bawah untuk lompat ke indikator terkait
                                        </Tooltip>
                                    }
                                >
                                    <Col className="d-flex align-items-center justify-content-center">
                                        <h6 className="width-fit me-2">Indikator</h6>
                                        <FontAwesomeIcon icon={faCircleInfo} className="pointer" />
                                    </Col>
                                </OverlayTrigger>
                            </Row>
                            <Row>
                                <Col>
                                    <CustomLink link_list={props?.link_list} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="mx-5">
                        <h6 className="fw-bold">Hasil</h6>
                    </Row>
                    {props?.assessmentResultResponse !== null && (props.assessmentResultResponse.result?.map((item: any, index: number) => {
                        let names = props?.support_doc_name[item.indicator_number - 1];
                        return (
                            <>
                                <Row className="custom-shadow custom-border m-3 p-3" id={item.indicator_number} key={index}>
                                    <Col>
                                        <Row className="my-3">
                                            <Col xs={4}>
                                                <h6>Domain</h6>
                                            </Col>
                                            <Col>
                                                <p>{item.domain}</p>
                                            </Col>
                                        </Row>
                                        <Row className="my-3">
                                            <Col xs={4}>
                                                <h6>Aspek</h6>
                                            </Col>
                                            <Col>
                                                <p>{item.aspect}</p>
                                            </Col>
                                        </Row>
                                        <Row className="align-items-center">
                                            <Col xs={4} className="mt-2 mb-3">
                                                <h6>Indikator</h6>
                                            </Col>
                                            <Col>
                                                <CircledNumber number={item.indicator_number} />
                                            </Col>
                                        </Row>
                                        <Row className="align-items-center">
                                            <Col xs={4} className="my-2">
                                                <h6>Level</h6>
                                            </Col>
                                            <Col>
                                                <CircledNumber number={item.level} />
                                            </Col>
                                        </Row>
                                        <Row className="my-3">
                                            <Col xs={4}>
                                                <h6>Data Dukung</h6>
                                            </Col>
                                            <Col>
                                                {names?.length !== 0 && (names?.map((val: string, idx: number) => {
                                                    return (
                                                        <p key={idx}>{val}</p>
                                                    )
                                                }))}
                                            </Col>
                                        </Row>
                                        <Row className="my-3">
                                            <h6>Penjelasan</h6>
                                        </Row>
                                        <Row className="bg-light-purple custom-border p-2">
                                            <Col>
                                                <p className="text-break">{item.explanation}</p>
                                            </Col>
                                            <Col xs={1}>
                                                <OverlayTrigger
                                                    trigger="click"
                                                    placement="top"
                                                    rootClose
                                                    overlay={
                                                        <Popover>
                                                            <Popover.Body>
                                                                Berhasil disalin!
                                                            </Popover.Body>
                                                        </Popover>
                                                    }
                                                >
                                                    <FontAwesomeIcon icon={faClone} className="pointer text-purple" onClick={() => props?.copyText(item.explanation)} />
                                                </OverlayTrigger>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col>
                                        <Row className="my-3">
                                            <h6 className="fw-bold text-center">Bukti dalam Dokumen</h6>
                                        </Row>
                                        <Row className="">
                                            <Col>
                                                <Carousel variant="dark" slide={false}>
                                                    {item.support_document_proof?.length !== 0 && (item.support_document_proof.map((photo: any, idx: number) => {
                                                        return (
                                                            <Carousel.Item className="border rounded text-center">
                                                                <a href={photo.proof_page_document_url} target='_blank' className="text-decoration-none">
                                                                    <p className="text-muted pt-5">{photo.name}</p>
                                                                    <Image src={photo.proof_image_url} />
                                                                </a>
                                                            </Carousel.Item>
                                                        )
                                                    }))}
                                                </Carousel>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </>
                        )
                    }))}
                    <Row className="justify-content-center my-3">
                        <Col xs={2}>
                            <Link to={`/validate/${props?.assessmentId}`}>
                                <PurpleButton text="Validasi Hasil" />
                            </Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )

}

export default AssessmentResultComponent;