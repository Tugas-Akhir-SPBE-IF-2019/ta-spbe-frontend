import { lazy } from 'react';
import { Row, Col, Image, Form, Modal } from 'react-bootstrap';
import progress_bar_3 from "../../assets/pb-edit-3.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const NavBar = lazy(() => import("../../components/NavBar"));
const PurpleButton = lazy(() => import("../../components/General/PurpleButton"));
const TextDropdown = lazy(() => import("../../components/General/TextDropdown"));

const EditProfileSPBEComponent = (props: any) => {
    return (
        <>
            <NavBar/>
            <Modal show={props?.showModal} onHide={props?.toggleModal} centered>
                <Modal.Body>
                    <Row className="text-center p-5">
                        <Col>
                            <p className="fw-bold">Data evaluasi berhasil diperbaharui!</p>
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
                    <Row className="text-center mb-5">
                        <Col>
                            <h5 className="text-purple fw-bold my-3">Lengkapi profil Anda!</h5>
                            <Image src={progress_bar_3} fluid />
                        </Col>
                    </Row>
                    {props?.list_items?.map((item: any, index: number) => {
                        return (
                            <>
                                <Row className="justify-content-center">
                                    <Col xs={12} md={7}>
                                        <Form>
                                            <Form.Group className="my-4">
                                                <Form.Label className="text-purple mb-2">Peran</Form.Label>
                                                <TextDropdown
                                                    placeholder="Pilih Peran"
                                                    xs={12}
                                                    dict={[
                                                        {text: "Asesor Internal", value: "Asesor Internal"},
                                                        {text: "Asesor Eksternal", value: "Asesor Eksternal"},
                                                    ]}
                                                    name="role"
                                                    value={item.role}
                                                    onChange={(e: any) => props?.handleInputChange(e, index)}
                                                    className="py-3"
                                                />
                                            </Form.Group>
                                            <Form.Group className="my-4 position-relative">
                                                <Form.Label className="text-purple mb-2">Instansi SPBE</Form.Label>
                                                <Form.Control onChange={(e: any) => props?.handleInputChange(e, index)} value={item.institution_name} name="institution_name" type="text" placeholder="Tuliskan Instansi SPBE" className="py-3 custom-border shadow-none" />
                                                {props?.showSuggestions[index] &&
                                                    <div className="rounded border position-absolute bg-white z-front position-relative">
                                                    {(props?.suggestions.map((sug: any, idx: number) => {
                                                            return (
                                                                <option className="custom-option rounded pointer px-3" value={sug.id} key={idx} onClick={() => props?.handleSelectSuggestion(sug.id, sug.institution_name, index)}>{sug.institution_name}</option>
                                                            )
                                                        }))}
                                                    </div>
                                                }
                                            </Form.Group>
                                            <Form.Group className="my-4">
                                                <Form.Label className="text-purple mb-2">Tahun Evaluasi</Form.Label>
                                                <Form.Control type="text" value={item.evaluation_year} onChange={(e: any) => props?.handleInputChange(e, index)} name="evaluation_year" placeholder="Tuliskan Tahun Evaluasi" className="py-3 custom-border shadow-none" />
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
                    <Row className="justify-content-end">
                        <Col xs={4} lg={2}>
                            <PurpleButton text="Simpan" onClick={(e: any) => props?.handleUpdateEvaluationData(e)} />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )

}

export default EditProfileSPBEComponent;