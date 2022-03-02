import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { DynamicStar } from 'react-dynamic-star';
import person from "./../../img/person.png";

const Review = () => {
    const [reviews, setReviews] = useState()

    useEffect(() => {
        const url = `${process.env.REACT_APP_API_URL}/reviews?limit=3`;

        fetch(url).then(res=> res.json()).then(data=>setReviews(data))
    }, [])
    return (
        <section>
            <Container>
            <Row className='d-flex justify-content-center align-items-center'>
                {reviews && reviews.map(review =>(
                    <Col lg={4} md={4} sm={12} key={review._id}>
                        <Card className="mb-4">
                            <Card.Img src={person}/>
                            <Card.Body>
                                <Card.Title>{review.username}</Card.Title>
                                <Card.Text >{review.reviews}</Card.Text>
                                <DynamicStar rating={review.rating} className="w-25"/>
                            </Card.Body>
                        </Card>
                    </Col>)
                )}
                </Row>
            </Container>
        </section>
    );
};

export default Review;