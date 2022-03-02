import React, { useState } from 'react'
import { Button, Col, Container, Row, Spinner } from 'react-bootstrap'
import useAuth from '../../hooks/useAuth'


const SingleServiceBody = ({ id, body, title, price }) => {
    const [loading, setLoading] = useState(false)
    const { user } = useAuth()

    const handlerPlaceOrder = async (user, id, title, price) => {
        await setLoading(true)
        const url = `${process.env.REACT_APP_API_URL}/orders`

        await fetch(url, {
            method: 'put',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(
                {
                    guid: user,
                    productID: id,
                    title: title,
                    cost: price,
                    date: Date()
                }
            )
        })
            .then(res => res.json())
            .then(setLoading(false))
    }
    
    return (
        <div className="be-single-service-body">
            <Container>
                <Row >
                    <Col lg={12} md={12} sm={12}>
                        {body}
                    
                        <hr />
                        <Row className="justify-content-center">
                            <Col lg={9} md={9} sm={12}>
                                <p>Tour Cost: 150$</p>
                            </Col>
                            <Col lg={3} md={3} sm={12}>
                                <Button variant="secondary" size="lg" onClick={() => handlerPlaceOrder( user.uid, id, title, price)} disabled={loading}>
                                    {loading? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> :'Book Now'}
                                </Button>
                            </Col>
                        </Row>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SingleServiceBody
