import { lazy } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

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
                            <h1 className="mb-3">Beranda</h1>
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
                            placeholder="Pilih Indeks"
                            xs={4}
                            dict={[
                                {text: "1-2", value: 1},
                                {text: "2-3", value: 2},
                                {text: "3-4", value: 3},
                                {text: "4-5", value: 4},
                            ]}
                            name="index"
                            onChange={(e) => props?.handleInputChange(e, "INDEX")}
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
                    <CustomTable isGuestTable {...props} />
                </Col>
            </Row>
        </>
    )
}

export default GuestDashboardComponent;