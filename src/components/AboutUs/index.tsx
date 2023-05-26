import { lazy } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import about_img from "../../assets/about-us.jpg";

const NavBar = lazy(() => import("../../components/NavBar"));
const PurpleButton = lazy(() => import("../../components/General/PurpleButton"));

const AboutUsComponent = (props: any) => {
    return (
        <div className="h-100 d-flex flex-column">
            <NavBar/>
            <Row className="align-items-center flex-grow-1">
                <Col xs={12} md={4} className="p-5">
                    <h1 className="text-huge text-purple fw-bolder">Tentang<br/>Kami</h1>
                    <p className="text-big text-purple my-5">Sekelompok mahasiswa yang antusias, pekerja keras, dan cepat beradaptasi</p>
                    <Row className={"text-bigger fw-bold " + (!props?.showLink && "d-none")}>
                        <Col className="p-0">
                            <a href="https://www.linkedin.com/in/alifahrb/" target="_blank" className="text-purple">Alifah</a>
                            <br/>
                            <a href="https://www.linkedin.com/in/makramab/" target="_blank" className="text-purple">Akram</a>
                        </Col>
                        <Col className="p-0">
                            <a href="https://www.linkedin.com/in/afifahfq/" target="_blank" className="text-purple">Afifah</a>
                            <br/>
                            <a href="https://www.linkedin.com/in/awwalak/" target="_blank" className="text-purple">Awwala</a>
                        </Col>
                    </Row>
                    <Row className={"pb-3 " + (props?.showLink && "d-none")}>
                        <Col xs={12} lg={8} xl={6}>
                            <PurpleButton text="Lanjut Baca" onClick={props?.setShowLink} />
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} md={8} className="py-3 z-back">
                    <Image fluid src={about_img}  />
                </Col>
            </Row>
        </div>
    )

}

export default AboutUsComponent;