import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Col, Container, Row} from 'react-bootstrap'


const HomeBlog = () => {
    return (
        <section className="be-home-blogs">
            <Container className="be-section-header text-center">
                <h1 >We are best for this reasons</h1>
            </Container>

            <Container>
                <Row>
                    <Col lg={4} md={4} sm={12}>
                        <Link to={`/`}>
                            <Card className="mb-4">
                                <Card.Img src={`https://cdn.pixabay.com/photo/2016/04/27/18/47/u-a-e-1357260_960_720.jpg`} />
                                <Card.Body>
                                    <Card.Text></Card.Text>
                                    <Card.Title>Our Transport Policy</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                    
                    <Col lg={4} md={4} sm={12}>
                        <Link to={`/`}>
                            <Card className="mb-4">
                                <Card.Img src={`https://cdn.pixabay.com/photo/2020/01/07/10/03/terraces-4747195__340.jpg`} />
                                <Card.Body>
                                    <Card.Text></Card.Text>
                                    <Card.Title>Our Food Policy</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                    
                    <Col lg={4} md={4} sm={12}>
                        <Link to={`/`}>
                            <Card className="mb-4">
                                <Card.Img src={`https://cdn.pixabay.com/photo/2017/04/05/15/58/hotelroom-2205447__340.jpg`} />
                                <Card.Body>
                                    <Card.Text></Card.Text>
                                    <Card.Title>Our Hotel Policy</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default HomeBlog
