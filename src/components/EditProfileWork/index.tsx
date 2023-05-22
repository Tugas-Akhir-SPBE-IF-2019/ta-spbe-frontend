import { lazy } from 'react';
import { Row, Col, Image, Form, Modal } from 'react-bootstrap';
import progress_bar_2 from "../../assets/pb-edit-2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

// const NavBar = lazy(() => import("../../components/NavBar"));
// const PurpleButton = lazy(() => import("../../components/General/PurpleButton"));

import NavBar from '../NavBar';
import PurpleButton from '../General/PurpleButton';

const EditProfileWorkComponent = (props: any) => {
    return (
        <>
            <NavBar/>
            <Modal show={props?.showModal} onHide={props?.toggleModal} centered>
                <Modal.Body>
                    <Row className="text-center p-5">
                        <Col>
                            <p className="fw-bold">Data pekerjaan berhasil diperbaharui!</p>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Row>
                        <Col>
                            <Link to="/profile">
                                <PurpleButton text="Kembali"/>
                            </Link>
                        </Col>
                    </Row>
                </Modal.Footer>
            </Modal>
            <Row className="p-3">
                <Col>
                    <Row className="justify-content-end">
                        <Col xs={2}>
                            <PurpleButton text="Simpan" onClick={(e: any) => props?.handleUpdateJobData(e)} />
                        </Col>
                    </Row>
                    <Row className="text-center mb-5">
                        <Col>
                            <h5 className="text-purple fw-bold mb-3">Lengkapi profil Anda!</h5>
                            <Image src={progress_bar_2} />
                        </Col>
                    </Row>
                    {props?.list_items?.map((item: any, index: number) => {
                        return (
                            <>
                                <Row className="justify-content-center">
                                    <Col xs={7}>
                                        <Form>
                                            <Form.Group className="my-4">
                                                <Form.Label className="text-purple mb-2">Pekerjaan/Jabatan</Form.Label>
                                                <Form.Control type="text" value={item.role} onChange={(e: any) => props?.handleInputChange(e, index)} name="role" placeholder="Tuliskan Pekerjaan/Jabatan" className="py-3 custom-border shadow-none" />
                                            </Form.Group>
                                            <Form.Group className="my-4">
                                                <Form.Label className="text-purple mb-2">Instansi</Form.Label>
                                                <Form.Control type="text" value={item.company} onChange={(e: any) => props?.handleInputChange(e, index)} name="company" placeholder="Tuliskan Instansi" className="py-3 custom-border shadow-none" />
                                            </Form.Group>
                                            <Form.Group className="my-4">
                                                <Form.Label className="text-purple mb-2">Tahun Masuk</Form.Label>
                                                <Form.Control type="text" value={item.joined_year} onChange={(e: any) => props?.handleInputChange(e, index)} name="joined_year" placeholder="Tuliskan Tahun Masuk" className="py-3 custom-border shadow-none" />
                                            </Form.Group>
                                        </Form>
                                        <hr className="profile-hr my-3"/>
                                    </Col>
                                </Row>
                                {index < props.list_items.length - 1 &&
                                    <Row className="text-center">
                                        <Col>
                                            <FontAwesomeIcon icon={faMinus} onClick={() => props?.deleteField(index)} className="text-purple rounded-circle custom-border-opaque p-3 pointer" />
                                        </Col>
                                    </Row>
                                }
                            </>
                        )
                    })}
                    <Row className="text-center">
                        <Col>
                            <FontAwesomeIcon icon={faPlus} onClick={() => props?.addField()} className="text-purple rounded-circle custom-border-opaque p-3 pointer" />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )

}

export default EditProfileWorkComponent;