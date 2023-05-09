import { lazy } from 'react';
import { Modal, Row, Col } from 'react-bootstrap';
import { formatTimestamp, checkHistoryTitle, checkHistoryCaption, checkDocumentType, checkDocumentStyle } from '../../utils/helper';
import Timeline from 'react-bootstrap-timeline/lib/esm/Timeline';
import Card from 'react-bootstrap-timeline/lib/esm/Card';
import { Link } from "react-router-dom";

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
                    <Modal show={props?.showModal} onHide={props?.toggleModal} centered>
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
                                    {props?.assessmentHistoryResponse?.supporting_documents?.length !== 0 && (props?.assessmentHistoryResponse?.supporting_documents?.map((item: any, index: number) => {
                                        return (
                                            <>
                                                <Row className="text-start my-3 align-items-center" key={index}>
                                                    <Col xs={8}>
                                                        <a href={item.url} target="_blank" className="text-black">
                                                            {item.name}
                                                        </a>
                                                    </Col>
                                                    <Col xs={4}>
                                                        <h6 className={`${checkDocumentStyle(item.type)} width-fit px-3 py-2 rounded`}>{checkDocumentType(item.type)}</h6>
                                                    </Col>
                                                </Row>
                                                <hr/>
                                            </>
                                        )
                                    }))}
                                </Col>
                                <Col xs={4} className="custom-shadow">
                                    <h3>Status Penilaian</h3>
                                    <Timeline>
                                        {props?.history?.length !== 0 && (props?.history?.map((item: any, index: number) => {
                                            return (
                                                <Card
                                                    key={index}
                                                    content={`${checkHistoryCaption(item.status)} ${formatTimestamp(item.finished_date)}`}
                                                    title={checkHistoryTitle(item.status)}
                                                    isActive={true}
                                                    datetime={""}
                                                />
                                            )
                                        }))}
                                        {props?.history?.length === 1 &&
                                            <Card
                                                content={'Dokumen belum selesai dinilai'}
                                                title={'Penilaian Dokumen'}
                                                isActive={false}
                                                datetime={""}
                                            />
                                        }
                                        {props?.history?.length === 1 &&
                                            <Card
                                                content={'Dokumen belum diberi validasi'}
                                                title={'Validasi Dokumen'}
                                                isActive={false}
                                                datetime={""}
                                            />
                                        }
                                        {props?.history?.length === 2 &&
                                            <Card
                                                content={'Dokumen belum diberi validasi'}
                                                title={'Validasi Dokumen'}
                                                isActive={false}
                                                datetime={""}
                                            />
                                        }
                                    </Timeline>
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
                    <Row className="justify-content-between">
                        <Col>
                            <h1 className="mb-3">Dashboard</h1>
                        </Col>
                        <Col xs={2}>
                            <Link to="/upload">
                                <PurpleButton text="Upload Dokumen"/>
                            </Link>
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
                    <CustomTable isUserTable {...props} />
                </Col>
            </Row>
        </>
    )

}

export default UserDashboardComponent;