import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const HomeServices = () => {
    const [services, setServices] = useState()

    useEffect(() => {
        const url = `${process.env.REACT_APP_API_URL}/service?limit=6`;

        fetch(url).then(res=> res.json()).then(data=>setServices(data))
    }, [])


    return (
        <section className="be-home-services">
            <Container className="be-section-header text-center">
                <h1 >Dream Your Next Trip</h1>
                <h4 >Weekend getaways from Dhaka City</h4>
            </Container>

            <Container>
                <Row>
                    {services && services.map(service =>(
                        <Col lg={4} md={4} sm={12} key={service._id}>
                            <Card className="mb-4">
                                <Card.Img src={service.img} />
                                <Card.Body>
                                    <Card.Title>{service.title}</Card.Title>
                                    <Card.Text >{service.brief}</Card.Text>
                                    <p>
                                        Ducation: {service.day} day <br />
                                        from {service.cost}$/person
                                    </p>

                                    <p className="be-link dark">
                                        <Link to={`/service/${service._id}`}>Book now</Link>
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>)
                    )}
                </Row>
            </Container>

            <Container className="mt-5">
                <p className="be-link dark underline text-center">
                    <Link to={`/`}>Explore more of our services</Link>
                </p>
            </Container>
        </section>
    )
}

export default HomeServices
