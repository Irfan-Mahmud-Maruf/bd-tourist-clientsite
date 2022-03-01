import { Col, Container, Row } from 'react-bootstrap'



const Footer = () => {
    return (
        <>
            <footer>
                <Container className="pt-5 mb-5 text-center" >
                    <h1>BD Tourist</h1>
                    <p>Visit Bangladesh with Us</p>
                </Container>

                <Container className="copyright pt-2">
                    <Row className="text-center">
                        <Col>
                            <p>Copyright 2021. All rights reserved.</p>
                        </Col>
                    </Row>
                </Container>
            </footer>  
        </>
    )
}

export default Footer