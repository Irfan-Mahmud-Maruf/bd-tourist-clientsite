import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { BsHeartFill } from "react-icons/bs";
import Rating from 'react-rating';
import person from "./../../img/person.png";

const Review = () => {
    const [reviews, setReviews] = useState()

    useEffect(() => {
        const url = `${process.env.REACT_APP_API_URL}/reviews`;

        fetch(url).then(res=> res.json()).then(data=>setReviews(data))
    }, [])
    return (
        <section>
            <Container>
            <Row className='d-flex justify-content-center align-items-center'>
                {reviews && reviews.map(review =>(
                    <Col lg={4} md={4} sm={12} key={review._id}>
                        <Card className="mb-4 reviews d-flex justify-content-center align-items-center flex-column">
                            <img src={person} alt="" className=''/>
                            <Card.Body className='text-center'>
                                <Card.Title>{review.username}</Card.Title>
                                <Card.Text >{review.reviews}</Card.Text>
                                <Rating className='icon-color' 
                                    readonly
                                    initialRating={review.rating}
                                    emptySymbol={BsHeartFill}
                                    fullSymbol={BsHeartFill}/>
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