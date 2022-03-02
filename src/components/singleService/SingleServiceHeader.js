import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


const SingleServiceHeader = ({title}) => {
    return (
        <div className="be-single-service-header">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={12} md={12} sm={12}>
                        <h1>{title}</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SingleServiceHeader
