import { lazy } from 'react';
import { Row, Col, Image, Form } from 'react-bootstrap';
import progress_bar_3 from "../../assets/pb-edit-3.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const NavBar = lazy(() => import("../../components/NavBar"));
const PurpleButton = lazy(() => import("../../components/General/PurpleButton"));

const EditProfileSPBEComponent = (props: any) => {
    return (
        <>
            <NavBar/>
            <Row className="p-3">
                <Col>
                    <Row className="justify-content-end">
                        <Col xs={2}>
                            <PurpleButton text="Simpan" />
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
                                                <Form.Control type="text" placeholder="Tuliskan Peran" className="py-3 custom-border shadow-none" />
                                            </Form.Group>
                                            <Form.Group className="my-4">
                                                <Form.Label className="text-purple mb-2">Instansi SPBE</Form.Label>
                                                <Form.Control type="text" placeholder="Tuliskan Instansi SPBE" className="py-3 custom-border shadow-none" />
                                            </Form.Group>
                                            <Form.Group className="my-4">
                                                <Form.Label className="text-purple mb-2">Tahun Evaluasi</Form.Label>
                                                <Form.Control type="text" placeholder="Tuliskan Tahun Evaluasi" className="py-3 custom-border shadow-none" />
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

export default EditProfileSPBEComponent;