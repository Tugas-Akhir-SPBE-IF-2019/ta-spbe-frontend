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
                    <h1 className="text-huge text-purple fw-bolder">Tentang<br/>Kami</h1>
                    <p className="text-big text-purple my-5">Sekelompok mahasiswa yang antusias, pekerja keras, dan cepat beradaptasi</p>
                    <Row className={"text-bigger fw-bold " + (!props?.showLink && "d-none")}>
                        <Col>
                            <a href="https://www.linkedin.com/in/alifahrb/" target="_blank" className="text-purple">Alifah</a>
                            <br/>
                            <a href="https://www.linkedin.com/in/makramab/" target="_blank" className="text-purple">Akram</a>
                        </Col>
                        <Col>
                            <a href="https://www.linkedin.com/in/afifahfq/" target="_blank" className="text-purple">Afifah</a>
                            <br/>
                            <a href="https://www.linkedin.com/in/awwalak/" target="_blank" className="text-purple">Awwala</a>
                        </Col>
                    </Row>
                    <Row className={"pt-5 " + (props?.showLink && "d-none")}>
                        <Col xs={6}>
                            <PurpleButton text="Lanjut Baca" onClick={props?.setShowLink} />
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