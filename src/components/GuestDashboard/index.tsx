import { lazy } from 'react';
import { Row, Col, Form } from 'react-bootstrap';

const NavBar = lazy(() => import("../../components/NavBar"));
const Search = lazy(() => import("../../components/General/Search"));
const TextDropdown = lazy(() => import("../../components/General/TextDropdown"));
const PurpleButton = lazy(() => import("../../components/General/PurpleButton"));
const CustomTable = lazy(() => import("../../components/General/CustomTable"));

const GuestDashboardComponent = (props: any) => {
    return (
        <>
            <NavBar />
            <Row className="px-5 pt-5">
                <Col>
                    <Row>
                        <Col>
                            <h1 className="mb-3">Daftar Indeks SPBE</h1>
                        </Col>
                    </Row>
                    <Search
                        name="institution"
                        onChange={(e) => props?.handleInputChange(e, "INSTITUTION")}
                    />
                    <Row className="align-items-center">
                        <TextDropdown
                            placeholder="Pilih Jumlah Instansi"
                            xs={12}
                            lg={4}
                            text
                            name="limit"
                            onChange={(e) => props?.handleInputChange(e, "LIMIT")}
                        />
                        <Col className="d-flex flex-column my-3">
                            <Row className="justify-content-between">
                                <span className="text-center">Pilih Indeks</span>
                                <Col xs={6}>
                                    <span>Indeks Min</span>
                                    <Form.Range
                                        min="1"
                                        max="5"
                                        step="0.1"
                                        name="index_min"
                                        value={props?.index_min}
                                        onChange={(e: any) => props?.handleInputChange(e, "INDEX")}
                                    />
                                    <span>{props?.index_min}</span>
                                </Col>
                                <Col className="text-end" xs={6}>
                                    <span>Indeks Maks</span>
                                    <Form.Range
                                        min="1"
                                        max="5"
                                        step="0.1"
                                        name="index_max"
                                        value={props?.index_max}
                                        onChange={(e: any) => props?.handleInputChange(e, "INDEX")}
                                    />
                                    <span>{props?.index_max}</span>
                                </Col>
                            </Row>
                        </Col>
                        <TextDropdown
                            placeholder="Pilih Tanggal"
                            xs={12}
                            lg={4}
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
                    <CustomTable isGuestTable {...props} />
                </Col>
            </Row>
        </>
    )
}

export default GuestDashboardComponent;