import { lazy } from 'react';
import { Row, Col, Nav, Tab } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faRightToBracket, faUsers, faInfo, faFileArrowUp, faHighlighter, faUserCheck, faUser } from '@fortawesome/free-solid-svg-icons';

// const NavBar = lazy(() => import("../../components/NavBar"));
// const CircledNumber = lazy(() => import("../../components/General/CircledNumber"));

import NavBar from '../NavBar';
import CircledNumber from '../General/CircledNumber';

const TutorialComponent = (props: any) => {
    return (
        <>
            <NavBar/>
            <Row className="p-5">
                <Col>
                    <Tab.Container defaultActiveKey="Beranda">
                        <Row>
                            <Col xs={1} className="p-0">
                                <Nav variant="tabs" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="Beranda" className="d-flex flex-column justify-content-center text-center py-3">
                                            Beranda
                                            <FontAwesomeIcon icon={faHouse} />
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="Masuk" className="d-flex flex-column justify-content-center text-center py-3">
                                            Masuk
                                            <FontAwesomeIcon icon={faRightToBracket} />
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="Tentang" className="d-flex flex-column justify-content-center text-center py-3">
                                            Tentang
                                            <FontAwesomeIcon icon={faUsers} />
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="Petunjuk" className="d-flex flex-column justify-content-center text-center py-3">
                                            Petunjuk
                                            <FontAwesomeIcon icon={faInfo} />
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="Evaluasi" className="d-flex flex-column justify-content-center text-center py-3">
                                            Evaluasi
                                            <FontAwesomeIcon icon={faFileArrowUp} />
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="Hasil" className="d-flex flex-column justify-content-center text-center py-3">
                                            Hasil
                                            <FontAwesomeIcon icon={faHighlighter} />
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="Validasi" className="d-flex flex-column justify-content-center text-center py-3">
                                            Validasi
                                            <FontAwesomeIcon icon={faUserCheck} />
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="Profil" className="d-flex flex-column justify-content-center text-center py-3">
                                            Profil
                                            <FontAwesomeIcon icon={faUser} />
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col xs={11} className="custom-tabs">
                                <Tab.Content>
                                    <Tab.Pane eventKey="Beranda" className="p-3">
                                        <p>Pada halaman beranda, Anda dapat melihat riwayat instansi-instansi yang sudah dinilai beserta Indeks Tingkat Kematangan instansi tersebut secara keseluruhan. Berikut kolom-kolom yang tertera pada tabel.</p>
                                        <Row className="my-2">
                                            <Col className="d-flex align-items-center">
                                                <CircledNumber number="1" />
                                                <p>Nomor: nomor urut instansi</p>
                                            </Col>
                                        </Row>
                                        <Row className="my-2">
                                            <Col className="d-flex align-items-center">
                                                <CircledNumber number="2" />
                                                <p>Nama Instansi: nama instansi atau pemerintah daerah</p>
                                            </Col>
                                        </Row>
                                        <Row className="my-2">
                                            <Col className="d-flex align-items-center">
                                                <CircledNumber number="3" />
                                                <p>Tanggal: tanggal terbaru penilaian dokumen</p>
                                            </Col>
                                        </Row>
                                        <Row className="my-2">
                                            <Col className="d-flex align-items-center">
                                                <CircledNumber number="4" />
                                                <p>Indeks: nilai tingkat kematangan instansi tersebut secara keseluruhan untuk Domain 1 Kebijakan Internal</p>
                                            </Col>
                                        </Row>
                                        <hr className="my-3" />
                                        <p className="my-2">Berikut merupakan aksi yang dapat anda lakukan pada Halaman Beranda.</p>
                                        <Row className="my-2">
                                            <Col className="d-flex align-items-center">
                                                <CircledNumber number="1" />
                                                <p>Melakukan pencarian instansi dengan menggunakan search bar</p>
                                            </Col>
                                        </Row>
                                        <Row className="my-2">
                                            <Col className="d-flex align-items-center">
                                                <CircledNumber number="2" />
                                                <p>Mengatur jumlah instansi yang ditampilkan per halaman</p>
                                            </Col>
                                        </Row>
                                        <Row className="my-2">
                                            <Col className="d-flex align-items-center">
                                                <CircledNumber number="3" />
                                                <p>Melakukan filter tabel berdasarkan tanggal penilaian dan indeks kematangan</p>
                                            </Col>
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="Masuk" className="p-3">
                                        <p>Pada Halaman Masuk, Anda dapat melakukan <i>sign-in</i> menggunakan akun Google Anda. Anda perlu melakukan <i>Sign-in</i> terlebih dahulu sebelum dapat mengakses fitur-fitur lanjutan Website TA SPBE</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="Tentang" className="p-3">
                                        <p>Lorem klaalakjdlksjdlkad</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="Petunjuk" className="p-3">
                                        <p>Lorem klaalakjdlksjdlkad</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="Evaluasi" className="p-3">
                                        <p>Lorem klaalakjdlksjdlkad</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="Hasil" className="p-3">
                                        <p>Lorem klaalakjdlksjdlkad</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="Validasi" className="p-3">
                                        <p>Lorem klaalakjdlksjdlkad</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="Profil" className="p-3">
                                        <p>Lorem klaalakjdlksjdlkad</p>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Col>
            </Row>
        </>
    )

}

export default TutorialComponent;