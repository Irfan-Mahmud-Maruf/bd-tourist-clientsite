import React, { useEffect, useState } from 'react'
import { Accordion, Col, Container, Row } from 'react-bootstrap'


const HomeFAQ = () => {
    const [faqs, setFaqs] = useState()

    useEffect(() => {
        const url = `${process.env.REACT_APP_API_URL}/faq`;

        fetch(url).then(res=> res.json()).then(data=>setFaqs(data))
        console.log(faqs);
    }, [])


    return (
        <section className='be-faq'>
            <Container className="be-section-header text-center d-flex justify-content-center align-items-center">
                <img src={`https://img.freepik.com/free-vector/faqs-concept-illustration_114360-5245.jpg?w=996`} alt="" className='w-50 mx-5'/>
            
                <Row className="w-100">
                    <Col lg={12} md={12} sm={12}>
                        <Accordion>
                            {faqs && faqs.map(faq => (
                                <Accordion.Item eventKey={faq._id} key={faq._id}>
                                    <Accordion.Header>{faq.question}</Accordion.Header>
                                    <Accordion.Body>
                                        {faq.answer}
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default HomeFAQ
