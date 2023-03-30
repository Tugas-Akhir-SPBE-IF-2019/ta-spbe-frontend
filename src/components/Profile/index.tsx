import { lazy } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import default_img from "../../assets/default-profpic.png";
import progress_bar from "../../assets/progress-bar.png";

const NavBar = lazy(() => import("../../components/NavBar"));
const PurpleButton = lazy(() => import("../../components/General/PurpleButton"));

const ProfileComponent = (props: any) => {
    return (
        <>
            <NavBar/>
            <Row className="p-5">
                <Col>
                    <Row className="justify-content-end">
                        <Col xs={2}>
                            <PurpleButton text="Edit Profil" />
                        </Col>
                    </Row>
                    <Row className="text-center my-5">
                        <Col>
                            <Image src={default_img} />
                            <h1 className="text-purple fw-bold my-2">Nama Lengkap</h1>
                            <p className="text-purple">Tim Eksternal Evaluasi SPBE dan Tenaga Pengajar di ITB</p>
                        </Col>
                    </Row>
                    <Row className="text-center">
                        <Col>
                            <h5 className="text-purple fw-bold mb-3">Lengkapi profil Anda!</h5>
                            <Image src={progress_bar} />
                        </Col>
                    </Row>
                    <Row className="my-5">
                        <Col className="mx-5 custom-border custom-shadow px-5 py-3">
                            <h5 className="text-purple">Data Diri</h5>
                            <Row className="mt-3">
                                <Col xs={4} className="p-0">
                                    <p className="fw-bold">Nomor Kontak</p>
                                </Col>
                                <Col>
                                    <p>123-456-7890</p>
                                </Col>
                            </Row>
                            <Row className="mt-3">
                                <Col xs={4} className="p-0">
                                    <p className="fw-bold">Email</p>
                                </Col>
                                <Col>
                                    <p>dummy@email.com</p>
                                </Col>
                            </Row>
                            <Row className="mt-3">
                                <Col xs={4} className="p-0">
                                    <p className="fw-bold">Profil Linkedin</p>
                                </Col>
                                <Col>
                                    <p>linkedin.com/in/dummy/</p>
                                </Col>
                            </Row>
                            <Row className="mt-3">
                                <Col xs={4} className="p-0">
                                    <p className="fw-bold">Alamat Rumah</p>
                                </Col>
                                <Col>
                                    <p>1234 Example Street, Some City, What Country</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="mx-5 custom-border custom-shadow px-5 py-3 height-fit">
                            <h5 className="text-purple">Data Evaluasi SPBE</h5>
                            <Row className="mt-3">
                                <Col xs={4} className="p-0">
                                    <p className="fw-bold">Peran</p>
                                </Col>
                                <Col>
                                    <p>Asesor Eksternal</p>
                                </Col>
                            </Row>
                            <Row className="mt-3">
                                <Col xs={4} className="p-0">
                                    <p className="fw-bold">Instansi SPBE</p>
                                </Col>
                                <Col>
                                    <p>Kabupaten Lamongan</p>
                                </Col>
                            </Row>
                            <Row className="mt-3">
                                <Col xs={4} className="p-0">
                                    <p className="fw-bold">Tahun Evaluasi</p>
                                </Col>
                                <Col>
                                    <p>2022</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="mx-5 custom-border custom-shadow px-5 py-3">
                            <h5 className="text-purple">Data Kerja</h5>
                            <Row className="mt-3">
                                <Col xs={4} className="p-0">
                                    <p className="fw-bold">Pekerjaan/Jabatan</p>
                                </Col>
                                <Col>
                                    <p>Pengajar</p>
                                </Col>
                            </Row>
                            <Row className="mt-3">
                                <Col xs={4} className="p-0">
                                    <p className="fw-bold">Instansi</p>
                                </Col>
                                <Col>
                                    <p>Institut Teknologi Bandung</p>
                                </Col>
                            </Row>
                            <Row className="mt-3">
                                <Col xs={4} className="p-0">
                                    <p className="fw-bold">Tahun Masuk</p>
                                </Col>
                                <Col>
                                    <p>2015</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="mx-5 px-5 py-3">
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )

}

export default ProfileComponent;