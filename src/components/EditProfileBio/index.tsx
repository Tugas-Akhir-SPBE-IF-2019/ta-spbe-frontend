import { lazy } from 'react';
import { Row, Col, Image, Form } from 'react-bootstrap';
import progress_bar_1 from "../../assets/pb-edit-1.png";
import edit_img from "../../assets/edit-profpic.png";

const NavBar = lazy(() => import("../../components/NavBar"));
const PurpleButton = lazy(() => import("../../components/General/PurpleButton"));

const EditProfileBioComponent = (props: any) => {
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
                                    <Form.Control type="text" placeholder="Tuliskan Nama Lengkap" className="py-3 custom-border shadow-none" />
                                </Form.Group>
                                <Form.Group className="my-4">
                                    <Form.Label className="text-purple mb-2">Nomor Kontak</Form.Label>
                                    <Form.Control type="text" placeholder="Tuliskan Nomor Kontak" className="py-3 custom-border shadow-none" />
                                </Form.Group>
                                <Form.Group className="my-4">
                                    <Form.Label className="text-purple mb-2">Email</Form.Label>
                                    <Form.Control type="email" placeholder="Tuliskan Email" className="py-3 custom-border shadow-none" />
                                </Form.Group>
                                <Form.Group className="my-4">
                                    <Form.Label className="text-purple mb-2">Profil Linkedin</Form.Label>
                                    <Form.Control type="text" placeholder="Tuliskan Profil Linkedin" className="py-3 custom-border shadow-none" />
                                </Form.Group>
                                <Form.Group className="my-4">
                                    <Form.Label className="text-purple mb-2">Alamat Rumah</Form.Label>
                                    <Form.Control type="text" placeholder="Tuliskan Alamat Rumah" className="py-3 custom-border shadow-none" />
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