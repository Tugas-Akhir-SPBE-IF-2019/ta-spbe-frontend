import { lazy } from 'react';
import { Modal, Row, Col, Image } from 'react-bootstrap';
import temp_img from "../../assets/temp.png";

const NavBar = lazy(() => import("../../components/NavBar"));
const Search = lazy(() => import("../../components/General/Search"));
const TextDropdown = lazy(() => import("../../components/General/TextDropdown"));
const PurpleButton = lazy(() => import("../../components/General/PurpleButton"));
const CustomTable = lazy(() => import("../../components/General/CustomTable"));

const UserDashboardComponent = (props: any) => {
    return (
        <>
            <NavBar/>
            <Row className="px-5 pt-5">
                <Col>
                    <Modal show={props?.showModal} onHide={props?.toggleModal}>
                        <Modal.Body>
                            <Row className="text-center px-3 pt-3 gap-3">
                                <Col className="custom-shadow">
                                    <h3 className="mb-3">Dokumen Unggahan</h3>
                                    <Row className="text-start my-3">
                                        <Col xs={8}>
                                            <p>Judul Dokumen</p>
                                        </Col>
                                        <Col xs={4}>
                                            <p>Tipe</p>
                                        </Col>
                                    </Row>
                                    <hr/>
                                    <Row className="text-start my-3">
                                        <Col xs={8}>
                                            <h6><u>Dokumen A</u></h6>
                                        </Col>
                                        <Col xs={4}>
                                            <h6 className="text-green bg-green width-fit px-3 py-2 rounded">Dokumen Baru</h6>
                                        </Col>
                                    </Row>
                                    <hr/>
                                    <Row className="text-start my-3">
                                        <Col xs={8}>
                                            <h6><u>Dokumen A</u></h6>
                                        </Col>
                                        <Col xs={4}>
                                            <h6 className="text-orange bg-orange width-fit px-3 py-2 rounded">Dokumen Lama</h6>
                                        </Col>
                                    </Row>
                                    <hr/>
                                    <Row className="text-start my-3">
                                        <Col xs={8}>
                                            <h6><u>Dokumen A</u></h6>
                                        </Col>
                                        <Col xs={4}>
                                            <h6 className="text-blue bg-blue width-fit px-3 py-2 rounded">Dokumen Pendukung</h6>
                                        </Col>
                                    </Row>
                                    <hr/>
                                </Col>
                                <Col xs={4} className="custom-shadow">
                                    <h3>Status Penilaian</h3>
                                    <Image src={temp_img} fluid className="p-3" />
                                </Col>
                            </Row>
                        </Modal.Body>
                        <Modal.Footer className="justify-content-start">
                            <Row>
                                <Col>
                                    <PurpleButton text="Kembali" onClick={() => props?.toggleModal()} />
                                </Col>
                            </Row>
                        </Modal.Footer>
                    </Modal>
                    <Row>
                        <Col>
                            <h1 className="mb-3">Dashboard</h1>
                        </Col>
                    </Row>
                    <Search
                        name="institution"
                        onChange={(e) => props?.handleInputChange(e, "INSTITUTION")}
                    />
                    <Row className="my-5">
                        <TextDropdown
                            placeholder="Pilih Jumlah Instansi"
                            xs={4}
                            text
                            name="limit"
                            onChange={(e) => props?.handleInputChange(e, "LIMIT")}
                        />
                        <TextDropdown
                            placeholder="Pilih Status"
                            xs={4}
                            dict={[
                                {text: "Sedang Diproses", value: 1},
                                {text: "Selesai", value: 2},
                                {text: "Sudah Divalidasi", value: 3},
                            ]}
                            name="status"
                            onChange={(e) => props?.handleInputChange(e, "STATUS")}
                        />
                        <TextDropdown
                            placeholder="Pilih Tanggal"
                            xs={4}
                            date
                            onChange={(e) => props?.handleInputChange(e, "DATE")}
                        />
                    </Row>
                    <Row className="mb-5">
                        <Col xs={4} md={3} lg={2}>
                            <PurpleButton
                                text="Filter"
                                onClick={() => props?.submitFilter(false)}
                            />
                        </Col>
                    </Row>
                    <CustomTable isUserTable {...props} toggleModal={props?.toggleModal} />
                </Col>
            </Row>
        </>
    )

}

export default UserDashboardComponent;