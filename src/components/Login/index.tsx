import { lazy } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const NavBar = lazy(() => import("../../components/NavBar"));

const LoginComponent = (props: any) => {
    return (
        <>
            <NavBar/>
            <Container className="my-3">
                <Row className="text-center">
                    <Col>
                        <h1>Masuk</h1>
                    </Col>
                </Row>
                <Row className="my-5">
                    <Col>
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
            </Container>
        </>
    )

}

export default LoginComponent;