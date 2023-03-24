import { lazy } from 'react';
import { Row, Col, Table } from 'react-bootstrap';

const NavBar = lazy(() => import("../../components/NavBar"));
const Search = lazy(() => import("../../components/General/Search"));
const TextDropdown = lazy(() => import("../../components/General/TextDropdown"));
const PurpleButton = lazy(() => import("../../components/General/PurpleButton"));
const CustomTable = lazy(() => import("../../components/General/CustomTable"));

const GuestDashboardComponent = (props: any) => {
    return (
        <>
            <NavBar/>
            <Row className="px-5 pt-5">
                <Col>
                    <Row>
                        <Col>
                            <h1 className="mb-3">Beranda</h1>
                        </Col>
                    </Row>
                    <Search/>
                    <Row className="my-5">
                        <TextDropdown placeholder="Pilih Jumlah Instansi"/>
                        <TextDropdown placeholder="Pilih Indeks"/>
                        <TextDropdown placeholder="Pilih Tanggal"/>
                    </Row>
                    <Row className="mb-5">
                        <Col xs={4} md={3} lg={2}>
                            <PurpleButton text="Filter" />
                        </Col>
                    </Row>
                    <CustomTable isGuestTable {...props} />
                </Col>
            </Row>
        </>
    )
}

export default GuestDashboardComponent;