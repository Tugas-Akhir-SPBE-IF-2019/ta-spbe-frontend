import { lazy } from 'react';
import { Row, Col, Image, Form, Modal } from 'react-bootstrap';
import progress_bar_1 from "../../assets/pb-edit-1.png";
import edit_img from "../../assets/edit-profpic.png";
import { Link } from "react-router-dom";

// const NavBar = lazy(() => import("../../components/NavBar"));
// const PurpleButton = lazy(() => import("../../components/General/PurpleButton"));

import NavBar from '../NavBar';
import PurpleButton from '../General/PurpleButton';

const EditProfileBioComponent = (props: any) => {
    return (
        <>
            <NavBar/>
            <Modal show={props?.showModal} onHide={props?.toggleModal} centered>
                <Modal.Body>
                    <Row className="text-center p-5">
                        <Col>
                            <p className="fw-bold">Data diri berhasil diperbaharui!</p>
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
                            <PurpleButton text="Simpan" onClick={(e: any) => props?.handleUpdateBiodata(e)} />
                        </Col>
                    </Row>
                    <Row className="text-center">
                        <Col>
                            <h5 className="text-purple fw-bold mb-3">Lengkapi profil Anda!</h5>
                            <Image src={progress_bar_1} />
                        </Col>
                    </Row>
                    <Row className="mt-5 align-items-center">
                        <Col xs={4} className="text-center">
                            <Image src={edit_img} />
                        </Col>
                        <Col>
                            <Form>
                                <Form.Group className="my-4">
                                    <Form.Label className="text-purple mb-2">Nama Lengkap</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Tuliskan Nama Lengkap"
                                        value={props?.name}
                                        onChange={(e: any) => props?.handleInputChange(e)}
                                        name="name"
                                        className="py-3 custom-border shadow-none"
                                    />
                                </Form.Group>
                                <Form.Group className="my-4">
                                    <Form.Label className="text-purple mb-2">Nomor Kontak</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Tuliskan Nomor Kontak"
                                        value={props?.contact_number}
                                        onChange={(e: any) => props?.handleInputChange(e)}
                                        name="contact_number"
                                        className="py-3 custom-border shadow-none"
                                    />
                                </Form.Group>
                                <Form.Group className="my-4">
                                    <Form.Label className="text-purple mb-2">Email</Form.Label>
                                    <Form.Control
                                    type="email"
                                    placeholder="Tuliskan Email"
                                    value={props?.email}
                                    onChange={(e: any) => props?.handleInputChange(e)}
                                    name="email"
                                    className="py-3 custom-border shadow-none"
                                    />
                                </Form.Group>
                                <Form.Group className="my-4">
                                    <Form.Label className="text-purple mb-2">Profil Linkedin</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Tuliskan Profil Linkedin"
                                        value={props?.linkedin_profile}
                                        onChange={(e: any) => props?.handleInputChange(e)}
                                        name="linkedin_profile"
                                        className="py-3 custom-border shadow-none"
                                    />
                                </Form.Group>
                                <Form.Group className="my-4">
                                    <Form.Label className="text-purple mb-2">Alamat Rumah</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Tuliskan Alamat Rumah"
                                        value={props?.address}
                                        onChange={(e: any) => props?.handleInputChange(e)}
                                        name="address"
                                        className="py-3 custom-border shadow-none"
                                    />
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )

}

export default EditProfileBioComponent;