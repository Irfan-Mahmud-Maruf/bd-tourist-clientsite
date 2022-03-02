import React from 'react'
import { Container, Image } from 'react-bootstrap'

const SingleServiceCover = ({img, alt}) => {
    return (
        <div className="be-single-service-cover mx-auto">
            <Container>
                <Image src={img} alt={alt} fluid />
            </Container>
        </div>
    )
}

export default SingleServiceCover
