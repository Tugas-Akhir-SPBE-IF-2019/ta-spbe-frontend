import { lazy } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'

const NavBar = lazy(() => import("../../components/NavBar"));
const TextDropdown = lazy(() => import("../../components/General/TextDropdown"));
const PurpleButton = lazy(() => import("../../components/General/PurpleButton"));
const CircledNumber = lazy(() => import("../../components/General/CircledNumber"));
const CustomCheckbox = lazy(() => import("../../components/General/CustomCheckbox"));
const CustomUpload = lazy(() => import("../../components/General/CustomUpload"));

const UploadDocumentsComponent = (props: any) => {
    return (
        <>
            <NavBar/>
            <Row className="p-3">
                <Col className="custom-shadow p-3 me-2">
                    <Form.Group className="mb-4">
                        <Form.Label className="fw-bold mb-2">Nama Institusi*</Form.Label>
                        <TextDropdown
                            placeholder="Pilih Nama Institusi"
                            xs={12}
                            options={props?.institution_options}
                            name="institution_name"
                            onChange={(e) => props?.handleInputChange(e, "SELECT")}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Row className="py-3">
                            <Col className="d-flex align-items-center justify-content-between p-0">
                                <Form.Label className="fw-bold">Nomor Indikator*</Form.Label>
                                <Row>
                                    <Col className="">
                                        <PurpleButton
                                            text="Pilih Semua"
                                            onClick={() => props?.handleInputChange(
                                                {
                                                    target: {
                                                        name: "indicator_number",
                                                        value: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
                                                    }
                                                }, "SELECTALL"
                                            )}
                                        />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <hr/>
                        <Row className="py-3">
                            <Col className="d-flex align-items-center">
                                <CircledNumber number={1} />
                                <p>Arsitektur SPBE</p>
                                <CustomCheckbox
                                    id="indicator_number"
                                    name="indicator_number"
                                    value="1"
                                    onChange={(e) => props?.handleInputChange(e, "CHECK")}
                                    checked={props?.isChecked("1")}
                                />
                            </Col>
                        </Row>
                        <hr/>
                        <Row className="py-3">
                            <Col className="d-flex align-items-center">
                                <CircledNumber number={2} />
                                <p>Peta Rencana SPBE</p>
                                <CustomCheckbox
                                    id="indicator_number"
                                    name="indicator_number"
                                    value="2"
                                    onChange={(e) => props?.handleInputChange(e, "CHECK")}
                                    checked={props?.isChecked("2")}
                                />
                            </Col>
                        </Row>
                        <hr/>
                        <Row className="py-3">
                            <Col className="d-flex align-items-center">
                                <CircledNumber number={3} />
                                <p>Manajemen Data</p>
                                <CustomCheckbox
                                    id="indicator_number"
                                    name="indicator_number"
                                    value="3"
                                    onChange={(e) => props?.handleInputChange(e, "CHECK")}
                                    checked={props?.isChecked("3")}
                                />
                            </Col>
                        </Row>
                        <hr/>
                        <Row className="py-3">
                            <Col className="d-flex align-items-center">
                                <CircledNumber number={4} />
                                <p>Pembangunan Aplikasi SPBE</p>
                                <CustomCheckbox
                                    id="indicator_number"
                                    name="indicator_number"
                                    value="4"
                                    onChange={(e) => props?.handleInputChange(e, "CHECK")}
                                    checked={props?.isChecked("4")}
                                />
                            </Col>
                        </Row>
                        <hr/>
                        <Row className="py-3">
                            <Col className="d-flex align-items-center">
                                <CircledNumber number={5} />
                                <p>Layanan Pusat Data</p>
                                <CustomCheckbox
                                    id="indicator_number"
                                    name="indicator_number"
                                    value="5"
                                    onChange={(e) => props?.handleInputChange(e, "CHECK")}
                                    checked={props?.isChecked("5")}
                                />
                            </Col>
                        </Row>
                        <hr/>
                        <Row className="py-3">
                            <Col className="d-flex align-items-center">
                                <CircledNumber number={6} />
                                <p>Layanan Jaringan Intra</p>
                                <CustomCheckbox
                                    id="indicator_number"
                                    name="indicator_number"
                                    value="6"
                                    onChange={(e) => props?.handleInputChange(e, "CHECK")}
                                    checked={props?.isChecked("6")}
                                />
                            </Col>
                        </Row>
                        <hr/>
                        <Row className="py-3">
                            <Col className="d-flex align-items-center">
                                <CircledNumber number={7} />
                                <p>Penggunaan Sistem Penghubung</p>
                                <CustomCheckbox
                                    id="indicator_number"
                                    name="indicator_number"
                                    value="7"
                                    onChange={(e) => props?.handleInputChange(e, "CHECK")}
                                    checked={props?.isChecked("7")}
                                />
                            </Col>
                        </Row>
                        <hr/>
                        <Row className="py-3">
                            <Col className="d-flex align-items-center">
                                <CircledNumber number={8} />
                                <p>Manajemen Keamanan Informasi</p>
                                <CustomCheckbox
                                    id="indicator_number"
                                    name="indicator_number"
                                    value="8"
                                    onChange={(e) => props?.handleInputChange(e, "CHECK")}
                                    checked={props?.isChecked("8")}
                                />
                            </Col>
                        </Row>
                        <hr/>
                        <Row className="py-3">
                            <Col className="d-flex align-items-center">
                                <CircledNumber number={9} />
                                <p>Audit TIK</p>
                                <CustomCheckbox
                                    id="indicator_number"
                                    name="indicator_number"
                                    value="9"
                                    onChange={(e) => props?.handleInputChange(e, "CHECK")}
                                    checked={props?.isChecked("9")}
                                />
                            </Col>
                        </Row>
                        <hr/>
                        <Row className="py-3">
                            <Col className="d-flex align-items-center">
                                <CircledNumber number={10} />
                                <p>Tim Koordinasi SPBE</p>
                                <CustomCheckbox
                                    id="indicator_number"
                                    name="indicator_number"
                                    value="10"
                                    onChange={(e) => props?.handleInputChange(e, "CHECK")}
                                    checked={props?.isChecked("10")}
                                />
                            </Col>
                        </Row>
                        <hr/>
                        <Row>
                            <Col className="d-flex justify-content-end">
                                <p className="text-red fw-bold me-4 pe-2 pointer"
                                    onClick={() => props?.handleInputChange(
                                        {
                                            target: {
                                                name: "indicator_number",
                                                value: []
                                            }
                                        }, "RESET"
                                    )}
                                >Reset&nbsp;</p>
                            </Col>
                        </Row>
                    </Form.Group>
                </Col>
                <Col className="custom-shadow p-3 ms-2">
                    <Form.Group className="mb-5">
                        <Row>
                            <Col className="d-flex align-items-center mb-2 p-0">
                                <FontAwesomeIcon icon={faCircleInfo} />
                                <Form.Label className="fw-bold ms-2">Dokumen Pendukung*</Form.Label>
                            </Col>
                            <CustomUpload
                                name="supporting_document"
                                onChange={(e) => props?.handleInputChange(e, "FILES")}
                            />
                        </Row>
                    </Form.Group>
                    <Form.Group className="mb-5">
                        <Row>
                            <Col className="d-flex align-items-center mb-2 p-0">
                                <Form.Label className="fw-bold">Notulensi/Undangan Rapat</Form.Label>
                            </Col>
                            <CustomUpload />
                        </Row>
                    </Form.Group>
                    <Form.Group>
                        <Row>
                            <Col className="d-flex align-items-center mb-2 p-0">
                                <FontAwesomeIcon icon={faCircleInfo} />
                                <Form.Label className="fw-bold ms-2">Dokumen Lama</Form.Label>
                            </Col>
                            <CustomUpload />
                        </Row>
                    </Form.Group>
                </Col>
            </Row>
            <Row className="justify-content-end m-3">
                <Col xs={2}>
                    <PurpleButton
                        text="Kirim"
                        onClick={(e) => {props?.handleUploadDocuments(e)}}
                    />
                </Col>
            </Row>
        </>
    )
}

export default UploadDocumentsComponent;