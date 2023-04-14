import { lazy } from 'react';
import { Row, Col, Form, OverlayTrigger, Tooltip, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

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
            <Modal show={props?.showModal} onHide={props?.toggleModal}>
                <Modal.Body>
                    <Row className="text-center p-5">
                        <Col>
                            <p className="fw-bold">Hasil penilaian berhasil divalidasi!</p>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Row>
                        <Col>
                            <Link to="/dashboard">
                                <PurpleButton text="Selesai"/>
                            </Link>
                        </Col>
                    </Row>
                </Modal.Footer>
            </Modal>
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
                    {props?.listItem.length !== 0 && (props.listItem.map((item: any, index: number) => {
                        return (
                            <Row className="custom-border custom-shadow my-3" id={item.indicator_number} key={index}>
                                <Col>
                                    <Row className="align-items-center mt-4">
                                        <Col xs={4}>
                                            <h6>Indikator</h6>
                                        </Col>
                                        <Col className="p-0">
                                            <CircledNumber number={item.indicator_number} />
                                        </Col>
                                    </Row>
                                    <Row className="align-items-center my-5">
                                        <Col xs={4}>
                                            <h6>Kesesuaian Hasil</h6>
                                        </Col>
                                        <Col className="d-flex align-items-center p-0">
                                            <CustomRadio
                                                label="Ya"
                                                id={`result_correct-${index}`}
                                                name={`result_correct-${index}`}
                                                value={1}
                                                onChange={(e: any) => {props?.handleInputChange(e, "BOOL", index)}}
                                            />
                                        </Col>
                                        <Col className="d-flex align-items-center p-0">
                                            <CustomRadio
                                                label="Tidak"
                                                id={`result_correct-${index}`}
                                                name={`result_correct-${index}`}
                                                value={0}
                                                onChange={(e: any) => {props?.handleInputChange(e, "BOOL", index)}}
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
                                                id={`correct_level-${index}`}
                                                name={`correct_level-${index}`}
                                                value={1}
                                                onChange={(e: any) => {props?.handleInputChange(e, "INT", index)}}
                                            />
                                        </Col>
                                        <Col className="d-flex align-items-center p-0">
                                            <CustomRadio
                                                label="2"
                                                id={`correct_level-${index}`}
                                                name={`correct_level-${index}`}
                                                value={2}
                                                onChange={(e: any) => {props?.handleInputChange(e, "INT", index)}}
                                            />
                                        </Col>
                                        <Col className="d-flex align-items-center p-0">
                                            <CustomRadio
                                                label="3"
                                                id={`correct_level-${index}`}
                                                name={`correct_level-${index}`}
                                                value={3}
                                                onChange={(e: any) => {props?.handleInputChange(e, "INT", index)}}
                                            />
                                        </Col>
                                        <Col className="d-flex align-items-center p-0">
                                            <CustomRadio
                                                label="4"
                                                id={`correct_level-${index}`}
                                                name={`correct_level-${index}`}
                                                value={4}
                                                onChange={(e: any) => {props?.handleInputChange(e, "INT", index)}}
                                            />
                                        </Col>
                                        <Col className="d-flex align-items-center p-0">
                                            <CustomRadio
                                                label="5"
                                                id={`correct_level-${index}`}
                                                name={`correct_level-${index}`}
                                                value={5}
                                                onChange={(e: any) => {props?.handleInputChange(e, "INT", index)}}
                                            />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col className="mt-4">
                                    <Form.Control onChange={(e: any) => {props?.handleInputChange(e, "STR", index)}} as="textarea" name="explanation" rows={8} placeholder="Berikan penjelasan..." className="shadow-none" />
                                </Col>
                            </Row>
                        )
                    }))}
                    <Row className="my-2">
                        <Col>
                            <Row>
                                <Col className="d-flex align-items-center justify-content-center">
                                    <h6 className="width-fit me-2">Indikator</h6>
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip>
                                                Tekan nomor-nomor di bawah untuk lompat ke indikator terkait
                                            </Tooltip>
                                        }
                                    >
                                        <FontAwesomeIcon icon={faCircleInfo} className="pointer" />
                                    </OverlayTrigger>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <CustomLink link_list={props?.link_list} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col xs={2}>
                            <PurpleButton text="Kirim" onClick={(e: any) => props?.handleSendValidation(e)} />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )

}

export default ValidateResultComponent;