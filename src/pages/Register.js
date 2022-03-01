import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SignUpForm from '../components/registration/SignupForm'
import Layout from '../components/shared/Layout'

const Register = () => {
    return (
        <Layout>
            <section className="be-login">
                <Container>
                    <Row className='d-flex justify-content-end align-items-center'>
                        <Col lg={5} md={5} sm={12}>
                            <Container className="be-section-header p-0">
                                <img src={`https://img.freepik.com/free-vector/forms-concept-illustration_114360-4797.jpg?w=996`} alt="" className='w-100'/>
                            </Container>
                        </Col>

                        <Col lg={7} md={7} sm={12}>
                            <SignUpForm />
                        </Col>
                    </Row>
                </Container>
            </section>
        </Layout>
    )
}

export default Register
