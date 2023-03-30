import { lazy } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';
import welcome_img from "../../assets/hi.jpg";

const NavBar = lazy(() => import("../../components/NavBar"));

const LoginComponent = (props: any) => {
    return (
        <>
            <NavBar/>
            <Row>
                <Col className="d-flex flex-column text-center justify-content-center align-items-center p-5">
                    <Image src={welcome_img} fluid className="w-50"/>
                    <p className="text-purple">Sistem berbasis kecerdasan buatan kami siap membantu Anda!</p>
                </Col>
                <Col className="d-flex flex-column text-center justify-content-center px-5">
                    <h1 className="text-purple mb-5 fw-bold">Selamat Datang!</h1>
                    <p className="text-purple mb-3">Untuk mulai mengotomatisasi penilaian dokumen Sistem Pemerintahan Berbasis Online, </p>
                    <GoogleLogin
                        onSuccess={credentialResponse => {
                            console.log(credentialResponse);
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                    />
                </Col>
            </Row>
        </>
    )

}

export default LoginComponent;