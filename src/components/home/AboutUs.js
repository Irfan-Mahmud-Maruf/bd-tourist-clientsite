import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BsFillCheckCircleFill } from "react-icons/bs";


const AboutUs = () => {
    return (
        <section className='be-faq'>
            <Container className="text-center mt-5">
                <h1 >About us</h1>
            </Container>

        <Container>
            <Row className="be-section-header d-flex justify-content-center align-items-center">
                
                <Col lg={6} md={6} sm={12}>
                    <h3>BD Tourist</h3>
                    <br />
                    <div className='d-flex justify-content-center align-items-start mb-2'>
                    <div  className='me-3'>
                    <BsFillCheckCircleFill/>
                    </div>
                    <p>BD Tourist help all the tourist who wanna visit Bangladesh. Welcome visitors at Bangladesh. </p>
                    </div>
                    <div className='d-flex justify-content-center align-items-start mb-2'>
                    <div  className='me-3'>
                    <BsFillCheckCircleFill/>
                    </div>
                    <p>BD Tourist have flexible packages which suite your budget. We are soft for payment return policy. So not to be worried if anyone miss his tour.</p>
                    </div>
                    <div className='d-flex justify-content-center align-items-start mb-2'>
                    <div className='me-3'>
                    <BsFillCheckCircleFill/>
                    </div>
                    <p>BD Tourist make sure your safety first. You will 24 hours guide. They will update all kind of news about your tour</p>
                    </div>
                    <p>Lets explore the history of Bangladesh and the beauty of Bangladesh with us. </p>
                </Col>
               
                <Col lg={5} md={5} sm={12}>
                    <img src={`https://img.freepik.com/free-vector/back-back-concept-illustration_114360-5999.jpg?w=740`} alt="" className='w-100'/>
                </Col>
            </Row>
        </Container>
    </section>
    );
};

export default AboutUs;