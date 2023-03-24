import { lazy } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import about_img from "../../assets/about-us.jpg";

const NavBar = lazy(() => import("../../components/NavBar"));
const PurpleButton = lazy(() => import("../../components/General/PurpleButton"));

const AboutUsComponent = (props: any) => {
    return (
        <>
            <NavBar/>
            <Row className="px-5 mx-5 pt-5 mt-5">
                <Col xs={4} className="ps-5 pt-5">
                    <h1 className="text-huge text-purple">Tentang<br/>Kami</h1>
                    <p className="text-big text-purple my-5 pb-5">Sekelompok mahasiswa yang antusias, pekerja keras, dan cepat beradaptasi</p>
                    <Row>
                        <Col xs={6}>
                            <PurpleButton text="Lanjut Baca" />
                        </Col>
                    </Row>
                </Col>
                <Col className="text-end pe-5">
                    <Image fluid src={about_img}  />
                </Col>
            </Row>
        </>
    )

}

export default AboutUsComponent;