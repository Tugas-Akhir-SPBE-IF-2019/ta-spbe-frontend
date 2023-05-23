import { lazy } from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';

// const NavBar = lazy(() => import("../../components/NavBar"));
// const Search = lazy(() => import("../../components/General/Search"));
// const TextDropdown = lazy(() => import("../../components/General/TextDropdown"));
// const PurpleButton = lazy(() => import("../../components/General/PurpleButton"));
// const CustomTable = lazy(() => import("../../components/General/CustomTable"));

import NavBar from '../NavBar';
import Search from '../General/Search';
import TextDropdown from '../General/TextDropdown';
import PurpleButton from '../General/PurpleButton';
import CustomTable from '../General/CustomTable';

const GuestDashboardComponent = (props: any) => {
    return (
        <>
            <NavBar />
            <Row className="px-5 pt-5">
                <Col>
                    <Row>
                        <Col>
                            <h1 className="mb-3">Beranda</h1>
                        </Col>
                    </Row>
                    <Search
                        name="institution"
                        onChange={(e) => props?.handleInputChange(e, "INSTITUTION")}
                    />
                    <Row className="my-5 align-items-center">
                        <TextDropdown
                            placeholder="Pilih Jumlah Instansi"
                            xs={4}
                            text
                            name="limit"
                            onChange={(e) => props?.handleInputChange(e, "LIMIT")}
                        />
                        <Col className="d-flex flex-column">
                            <Row className="justify-content-between">
                                <Col>
                                    <span>{props?.index_min}</span>
                                </Col>
                                <Col className="text-center">
                                    <span>Pilih Indeks</span>
                                </Col>
                                <Col className="text-end">
                                    <span>{props?.index_max}</span>
                                </Col>
                            </Row>
                            <Form.Range
                                min="1"
                                max="4"
                                step="0.1"
                                name="index_min"
                                value={props?.index_min}
                                onChange={(e: any) => props?.handleInputChange(e, "INDEX")}
                            />
                            <Form.Range
                                min="1"
                                max="4"
                                step="0.1"
                                name="index_max"
                                value={props?.index_max}
                                onChange={(e: any) => props?.handleInputChange(e, "INDEX")}
                            />
                        </Col>
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
                    <CustomTable isGuestTable {...props} />
                </Col>
            </Row>
        </>
    )
}

export default GuestDashboardComponent;