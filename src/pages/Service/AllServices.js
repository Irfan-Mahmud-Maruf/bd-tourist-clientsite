import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner, Table } from 'react-bootstrap';
import ServiceAddNew from '../../components/order/ServiceAddNew';
import Layout from '../../components/shared/Layout';


const AllServices = () => {
    const [loading, setLoading] = useState(true)
    const [services, setServices] = useState()

    useEffect(() => {
        const url = `${process.env.REACT_APP_API_URL}/service`

        fetch(url).then(res => res.json()).then(data => {
            setServices(data)
            setLoading(false)
        })
    })
    

    return (
        <>
            <Layout classname="be-dashboard-allorder">
                <section className="be-order-table">
                    <Container>
                        <Row>
                            <Col lg={10} md={10} sm={12} >
                                <h1>All Orders</h1>
                            </Col>

                            <Col lg={2} md={12} sm={12} >
                                <ServiceAddNew />
                            </Col>
                        </Row>
                        

                        { loading? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> : services && <>
                            <Table className="be-order-table" striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Title</th>
                                        <th>Duration</th>
                                        <th>Amount</th>
                                        <th></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    { services.map( (service, i ) => 
                                        <>
                                            <tr key={service._id}>
                                                <td>{i + 1}</td>
                                                <td>{service.title}</td>
                                                <td>{service.day} day</td>
                                                <td>{service.cost} /</td>
                                                <td>{service.brief}</td>
                                            </tr>
                                        </>
                                    )}
                                </tbody>
                            </Table>
                        </>}
                    </Container>
                </section>
                
            </Layout>
        </>
    )
}

export default AllServices
