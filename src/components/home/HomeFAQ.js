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
        <section className="be-home-faqs">
            <Container className="be-section-header text-center">
                <h1 >Frequently Asked Questions</h1>
            </Container>

            <Container>
                <Row className="justify-content-center">
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
