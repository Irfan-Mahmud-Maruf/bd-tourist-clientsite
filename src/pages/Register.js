import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SigninForm from '../components/registration/SignupForm'
import Layout from '../components/shared/Layout'

const Register = () => {
    return (
        <Layout>
            <section className="be-login">
                <Container>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <Container className="be-section-header">
                                <h1>Explore the <br/>globe with us</h1>
                            </Container>
                        </Col>

                        <Col lg={5} md={5} sm={12}>
                            <SigninForm />
                        </Col>
                    </Row>
                </Container>
            </section>
        </Layout>
    )
}

export default Register
