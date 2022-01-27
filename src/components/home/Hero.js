import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Hero = ({ bg, className }) => {
    console.log('Hero: ', bg, className)


    return (
        <>
            <section className="be-home-hero ">
                <div className="bg" style={{backgroundImage: 'url(https://cdn.pixabay.com/photo/2017/08/30/22/33/fort-aurangabad-2698844__340.jpg)'}}>
                </div>

                <Container className="">
                    <Row className="align-center">
                        <Col lg={6} md={6} sm={12}>
                            <div className="be-hero-box bg-white">
                                <h1 className="title-big mb-3">Visit Bangladesh with Us</h1>
                                <p className="mb-4">let's explore the beauty of nature </p>

                                {/* <Button className="mb-3" variant="dark"> */}
                                    <Link className="btn btn-dark mb-5" to={`/register`}>Start Tour</Link>
                                {/* </Button> */}

                                <p className="be-link dark">
                                    <Link to={`/about`}>Learn more about BD Tourist</Link>
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Hero
