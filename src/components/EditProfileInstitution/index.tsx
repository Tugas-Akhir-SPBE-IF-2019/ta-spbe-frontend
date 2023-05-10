import { lazy } from 'react';
import { Row, Col, Image, Form, Modal } from 'react-bootstrap';
import progress_bar_3 from "../../assets/pb-edit-3.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const NavBar = lazy(() => import("../../components/NavBar"));
const PurpleButton = lazy(() => import("../../components/General/PurpleButton"));

const EditProfileInstitutionComponent = (props: any) => {
    return (
        <>
            <NavBar/>
            <Modal show={props?.showModal} onHide={props?.toggleModal} centered>
                <Modal.Body>
                    <Row className="text-center p-5">
                        <Col>
                            <p className="fw-bold">Data institusi berhasil diperbaharui!</p>
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
                            <PurpleButton onClick={(e: any) => props?.handleUpdateInstitutionData(e)} text="Simpan" />
                        </Col>
                    </Row>
                    <Row className="text-center mb-5">
                        <Col>
                            <h5 className="text-purple fw-bold mb-3">Lengkapi profil Anda!</h5>
                            <Image src={progress_bar_3} />
                        </Col>
                    </Row>
                    {props?.list_items?.map((item: any, index: number) => {
                        return (
                            <>
                                <Row className="justify-content-center">
                                    <Col xs={7}>
                                        <Form>
                                            <Form.Group className="my-4">
                                                <Form.Label className="text-purple mb-2">Peran</Form.Label>
                                                <Form.Control onChange={(e: any) => props?.handleInputChange(e, index)} name="role" value={item.role} type="text" placeholder="Tuliskan Peran" className="py-3 custom-border shadow-none" />
                                            </Form.Group>
                                            <Form.Group className="my-4">
                                                <Form.Label className="text-purple mb-2">Nama Instansi</Form.Label>
                                                <Form.Control onChange={(e: any) => props?.handleInputChange(e, index)} name="institution_name" value={item.institution_name} type="text" placeholder="Tuliskan Instansi SPBE" className="py-3 custom-border shadow-none" />
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

export default EditProfileInstitutionComponent;