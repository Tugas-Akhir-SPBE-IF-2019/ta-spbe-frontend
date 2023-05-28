import { lazy } from 'react';
import { Row, Col, Image, Button, Modal } from 'react-bootstrap';
import default_img from "../../assets/default-profpic.png";
import progress_bar from "../../assets/progress-bar.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

const NavBar = lazy(() => import("../../components/NavBar"));
const PurpleButton = lazy(() => import("../../components/General/PurpleButton"));

const ProfileComponent = (props: any) => {
    const { evaluationDataResponse, jobDataResponse, institutionDataResponse } = props;
    return (
        <>
            <NavBar/>
            <Modal show={props?.showModal} onHide={props?.toggleModal} centered>
                <Modal.Body>
                    <Row className="text-center p-5">
                        <Col>
                            <p className="fw-bold">Data institusi berhasil dihapus!</p>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Row>
                        <Col>
                            <PurpleButton text="Kembali" onClick={() => props?.toggleModal()} />
                        </Col>
                    </Row>
                </Modal.Footer>
            </Modal>
            <Row className="p-5">
                <Col>
                    <Row className="text-center mb-5">
                        <Col>
                            {props?.biodataResponse?.profile_picture_link
                            ?
                                <Image src={props.biodataResponse.profile_picture_link} />
                            :
                                <Image src={default_img} />
                            }
                            <h1 className="text-purple fw-bold my-2">{props?.biodataResponse?.name}</h1>
                        </Col>
                    </Row>
                    <Row className="text-center">
                        <Col>
                            <h5 className="text-purple fw-bold mb-3">Lengkapi profil Anda!</h5>
                            <Image src={progress_bar} fluid />
                        </Col>
                    </Row>
                    <Row className="justify-content-center mt-5">
                        <Col className="mx-4 mb-5 custom-border custom-shadow px-5 py-3" xs={12} xl={5}>
                            <Link to="/edit-profile/biodata" className="text-decoration-none">
                                <h5 className="text-purple">
                                    Data Diri
                                    <FontAwesomeIcon icon={faPen} size="sm" className="text-purple ms-2" />
                                </h5>
                            </Link>
                            <Row className="mt-3">
                                <Col xs={12} sm={5} className="p-0">
                                    <p className="fw-bold">Nomor Kontak</p>
                                </Col>
                                <Col>
                                    <p>{props?.biodataResponse?.contact_number}</p>
                                </Col>
                            </Row>
                            <Row className="mt-3">
                                <Col xs={12} sm={5} className="p-0">
                                    <p className="fw-bold">Email</p>
                                </Col>
                                <Col>
                                    <p>{props?.biodataResponse?.email}</p>
                                </Col>
                            </Row>
                            <Row className="mt-3">
                                <Col xs={12} sm={5} className="p-0">
                                    <p className="fw-bold">Profil Linkedin</p>
                                </Col>
                                <Col>
                                    <p>{props?.biodataResponse?.linkedin_profile}</p>
                                </Col>
                            </Row>
                            <Row className="mt-3">
                                <Col xs={12} sm={5} className="p-0">
                                    <p className="fw-bold">Alamat Rumah</p>
                                </Col>
                                <Col>
                                    <p>{props?.biodataResponse?.address}</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="mx-4 mb-5 custom-border custom-shadow px-5 py-3" xs={12} xl={5}>
                            <Link to="/edit-profile/evaluation" className="text-decoration-none">
                                <h5 className="text-purple">
                                    Data Evaluasi SPBE
                                    <FontAwesomeIcon icon={faPen} size="sm" className="text-purple ms-2" />
                                </h5>
                            </Link>
                            {evaluationDataResponse.length === 0
                            ?
                                <Row className="align-items-center h-100">
                                    <Col>
                                        <p className="text-center my-5">Belum ada data evaluasi SPBE</p>
                                    </Col>
                                </Row>
                            :
                                <>
                                    {props?.showAllEvaluation
                                    ?
                                        <>
                                            {evaluationDataResponse.map((item: any, index: number) => {
                                                return (
                                                    <>
                                                        {index > 0 && <hr className="mt-3" />}
                                                        <Row className="mt-3">
                                                            <Col xs={12} sm={5} className="p-0">
                                                                <p className="fw-bold">Peran</p>
                                                            </Col>
                                                            <Col>
                                                                <p>{item.role}</p>
                                                            </Col>
                                                        </Row>
                                                        <Row className="mt-3">
                                                            <Col xs={12} sm={5} className="p-0">
                                                                <p className="fw-bold">Instansi SPBE</p>
                                                            </Col>
                                                            <Col>
                                                                <p>{item.institution_name}</p>
                                                            </Col>
                                                        </Row>
                                                        <Row className="mt-3">
                                                            <Col xs={12} sm={5} className="p-0">
                                                                <p className="fw-bold">Tahun Evaluasi</p>
                                                            </Col>
                                                            <Col>
                                                                <p>{item.evaluation_year}</p>
                                                            </Col>
                                                        </Row>
                                                    </>
                                                )
                                            })}
                                        </>
                                    :
                                        <>
                                            <Row className="mt-3">
                                                <Col xs={12} sm={5} className="p-0">
                                                    <p className="fw-bold">Peran</p>
                                                </Col>
                                                <Col>
                                                    <p>{evaluationDataResponse[0].role}</p>
                                                </Col>
                                            </Row>
                                            <Row className="mt-3">
                                                <Col xs={12} sm={5} className="p-0">
                                                    <p className="fw-bold">Instansi SPBE</p>
                                                </Col>
                                                <Col>
                                                    <p>{evaluationDataResponse[0].institution_name}</p>
                                                </Col>
                                            </Row>
                                            <Row className="mt-3">
                                                <Col xs={12} sm={5} className="p-0">
                                                    <p className="fw-bold">Tahun Evaluasi</p>
                                                </Col>
                                                <Col>
                                                    <p>{evaluationDataResponse[0].evaluation_year}</p>
                                                </Col>
                                            </Row>
                                            {evaluationDataResponse.length > 1 &&
                                                <Row className="mt-3">
                                                    <Col className="text-end p-0">
                                                        <Button
                                                            className="text-secondary bg-white border-0 p-0"
                                                            size="sm"
                                                            name="showAllEvaluation"
                                                            onClick={(e: any) => props?.handleShow(e)}
                                                        >
                                                            Lihat Semua
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            }
                                        </>
                                    }
                                </>
                            }
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col className="mx-4 mb-5 custom-border custom-shadow px-5 py-3" xs={12} xl={5}>
                            <Link to="/edit-profile/occupation" className="text-decoration-none">
                                <h5 className="text-purple">
                                    Data Kerja
                                    <FontAwesomeIcon icon={faPen} size="sm" className="text-purple ms-2" />
                                </h5>
                            </Link>
                            {jobDataResponse.length === 0
                            ?
                                <Row className="align-items-center h-100">
                                    <Col>
                                        <p className="text-center my-5">Belum ada data pekerjaan</p>
                                    </Col>
                                </Row>
                            :
                                <>
                                    {props?.showAllJob
                                    ?
                                        <>
                                            {jobDataResponse.map((item: any, index: number) => {
                                                return (
                                                    <>
                                                        {index > 0 && <hr className="mt-3" />}
                                                        <Row className="mt-3">
                                                            <Col xs={12} sm={5} className="p-0">
                                                                <p className="fw-bold">Pekerjaan/Jabatan</p>
                                                            </Col>
                                                            <Col>
                                                                <p>{item.role}</p>
                                                            </Col>
                                                        </Row>
                                                        <Row className="mt-3">
                                                            <Col xs={12} sm={5} className="p-0">
                                                                <p className="fw-bold">Instansi</p>
                                                            </Col>
                                                            <Col>
                                                                <p>{item.company}</p>
                                                            </Col>
                                                        </Row>
                                                        <Row className="mt-3">
                                                            <Col xs={12} sm={5} className="p-0">
                                                                <p className="fw-bold">Tahun Masuk</p>
                                                            </Col>
                                                            <Col>
                                                                <p>{item.joined_year}</p>
                                                            </Col>
                                                        </Row>
                                                    </>
                                                )
                                            })}
                                        </>
                                    :
                                        <>
                                            <Row className="mt-3">
                                                <Col xs={12} sm={5} className="p-0">
                                                    <p className="fw-bold">Pekerjaan/Jabatan</p>
                                                </Col>
                                                <Col>
                                                    <p>{jobDataResponse[0].role}</p>
                                                </Col>
                                            </Row>
                                            <Row className="mt-3">
                                                <Col xs={12} sm={5} className="p-0">
                                                    <p className="fw-bold">Instansi</p>
                                                </Col>
                                                <Col>
                                                    <p>{jobDataResponse[0].company}</p>
                                                </Col>
                                            </Row>
                                            <Row className="mt-3">
                                                <Col xs={12} sm={5} className="p-0">
                                                    <p className="fw-bold">Tahun Masuk</p>
                                                </Col>
                                                <Col>
                                                    <p>{jobDataResponse[0].joined_year}</p>
                                                </Col>
                                            </Row>
                                            {jobDataResponse.length > 1 &&
                                                <Row className="mt-3">
                                                    <Col className="text-end p-0">
                                                        <Button
                                                            className="text-secondary bg-white border-0 p-0"
                                                            size="sm"
                                                            name="showAllJob"
                                                            onClick={(e: any) => props?.handleShow(e)}
                                                        >
                                                            Lihat Semua
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            }
                                        </>
                                    }
                                </>
                            }
                        </Col>
                        <Col className="mx-4 mb-5 custom-border custom-shadow px-5 py-3" xs={12} xl={5}>
                            <h5 className="text-purple">Data Institusi</h5>
                            {institutionDataResponse.length === 0
                            ?
                                <Row className="align-items-center h-100">
                                    <Col>
                                        <p className="text-center my-5">Belum ada data institusi</p>
                                    </Col>
                                </Row>
                            :
                                <>
                                    {props?.showAllInstitution
                                    ?
                                        <>
                                            {institutionDataResponse.map((item: any, index: number) => {
                                                return (
                                                    <>
                                                        {index > 0 && <hr className="mt-3" />}
                                                        <Row className="mt-3">
                                                            <Col xs={12} sm={5} className="p-0">
                                                                <p className="fw-bold">Peran</p>
                                                            </Col>
                                                            <Col>
                                                                <p>{item.role}</p>
                                                            </Col>
                                                        </Row>
                                                        <Row className="mt-3 align-items-center">
                                                            <Col xs={12} sm={5} className="p-0">
                                                                <p className="fw-bold">Nama Institusi</p>
                                                            </Col>
                                                            <Col>
                                                                <p>{item.institution_name}</p>
                                                            </Col>
                                                            <Col className="text-end">
                                                                <FontAwesomeIcon icon={faTrash} size="2x" className="text-purple pointer" onClick={() => props?.handleDeleteInstitution(item.id)} />
                                                            </Col>
                                                        </Row>
                                                        <Row className="mt-3">
                                                            <Col xs={12} sm={5} className="p-0">
                                                                <p className="fw-bold">Status</p>
                                                            </Col>
                                                            <Col>
                                                                {item.status === "VALID"
                                                                ?
                                                                    <p className="text-green bg-green width-fit px-2">DITERIMA</p>
                                                                :
                                                                    <p className="text-orange bg-orange width-fit px-2">DIPROSES</p>
                                                                }
                                                            </Col>
                                                        </Row>
                                                    </>
                                                )
                                            })}
                                            <Row className="mt-5 justify-content-center">
                                                <Col xs={6}>
                                                    <Link to="/edit-profile/institution">
                                                        <PurpleButton text="Tambah Institusi" />
                                                    </Link>
                                                </Col>
                                            </Row>
                                        </>
                                    :
                                        <>
                                            <Row className="mt-3">
                                                <Col xs={12} sm={5} className="p-0">
                                                    <p className="fw-bold">Peran</p>
                                                </Col>
                                                <Col>
                                                    <p>{institutionDataResponse[0].role}</p>
                                                </Col>
                                            </Row>
                                            <Row className="mt-3 align-items-center">
                                                <Col xs={12} sm={5} className="p-0">
                                                    <p className="fw-bold">Nama Institusi</p>
                                                </Col>
                                                <Col>
                                                    <p>{institutionDataResponse[0].institution_name}</p>
                                                </Col>
                                                <Col className="text-end">
                                                    <FontAwesomeIcon icon={faTrash} size="2x" className="text-purple pointer" onClick={() => props?.handleDeleteInstitution(institutionDataResponse[0].id)} />
                                                </Col>
                                            </Row>
                                            <Row className="mt-3">
                                                <Col xs={12} sm={5} className="p-0">
                                                    <p className="fw-bold">Status</p>
                                                </Col>
                                                <Col>
                                                    {institutionDataResponse[0].status === "VALID"
                                                    ?
                                                        <p className="text-green bg-green width-fit px-2">DITERIMA</p>
                                                    :
                                                        <p className="text-orange bg-orange width-fit px-2">DIPROSES</p>
                                                    }
                                                </Col>
                                            </Row>
                                            {institutionDataResponse.length > 1 &&
                                                <Row className="mt-3">
                                                    <Col className="text-end p-0">
                                                        <Button
                                                            className="text-secondary bg-white border-0 p-0"
                                                            size="sm"
                                                            name="showAllInstitution"
                                                            onClick={(e: any) => props?.handleShow(e)}
                                                        >
                                                            Lihat Semua
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            }
                                        </>
                                    }
                                </>
                            }
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )

}

export default ProfileComponent;