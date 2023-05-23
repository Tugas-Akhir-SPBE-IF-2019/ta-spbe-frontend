import { lazy } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { Row, Col, Image, Button } from 'react-bootstrap';
import welcome_img from "../../assets/hi.jpg";
import google from "../../assets/google_logo.png";

// const NavBar = lazy(() => import("../../components/NavBar"));
// const PurpleButton = lazy(() => import("../../components/General/PurpleButton"));

import NavBar from '../NavBar';
import PurpleButton from '../General/PurpleButton';

const LoginComponent = (props: any) => {
    const handleLogin = useGoogleLogin({
        onSuccess: (codeResponse) => {
            props?.handleLoginState(codeResponse.access_token)
        },
        onError: (error) => console.log('Login Failed:', error)
    });

    return (
        <div className="h-100 d-flex flex-column">
            <NavBar/>
            <Row className="align-items-center flex-grow-1">
                <Col className="d-flex flex-column text-center justify-content-center align-items-center p-5">
                    <Image src={welcome_img} fluid className="w-50"/>
                    <p className="text-purple">Sistem berbasis kecerdasan buatan kami siap membantu Anda!</p>
                </Col>
                <Col className="d-flex flex-column text-center justify-content-center px-5">
                    <h1 className="text-purple mb-5 fw-bold">Selamat Datang!</h1>
                    <p className="text-purple mb-3">Untuk mulai mengotomatisasi penilaian dokumen Sistem Pemerintahan Berbasis Online, </p>
                    <Button onClick={() => handleLogin()} className="google-sign-in bg-white border-0 shadow-sm text-black p-0 align-items-center d-flex justify-content-center py-2 mx-auto">
                        <Image src={google} className="google-width me-3" />
                        <span className="my-auto">Masuk dengan Google</span>
                    </Button>
                </Col>
            </Row>
        </div>
    )

}

export default LoginComponent;