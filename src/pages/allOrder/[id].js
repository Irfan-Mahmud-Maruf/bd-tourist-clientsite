import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Spinner, Table } from 'react-bootstrap';
import { FaTimes } from "react-icons/fa";
import Layout from '../../components/shared/Layout';


const AllOrder = () => {
    const [loading, setAllLoading] = useState(true)
    const [allOrders, setAllOrders] = useState()

    useEffect(() => {
        const url = `${process.env.REACT_APP_API_URL}/orders`

        fetch(url).then(res => res.json()).then(data => {
            setAllOrders(data)
            setAllLoading(false)
        })
    }, [])

    const handerOrderComplete = (id) => {
        console.log(id)
    }
    const handerOrderRemove = (id) => {
        console.log(id)
    }
    

    return (
        <>
            <Layout className="be-dashboard-allorder">
                <section className="be-order-table">
                    <Container>
                        <Row>
                            <Col>
                                <h1>All Orders</h1>
                            </Col>
                        </Row>
                        
                        {loading ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> : allOrders && <>
                            <Table className="be-order-table" striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Title</th>
                                        <th>Date</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {allOrders.map((order, i) => (
                                        <tr key={order._id}>
                                            <td>{i + 1}</td>
                                            <td>{order.title}</td>
                                            <td>{order.date}</td>
                                            <td>{order.cost} USD</td>
                                            <td>
                                                <Button size="sm" onClick={() => handerOrderComplete(order._id)} variant="outline-dark" style={{ marginRight: 10 }}>
                                                    Complete
                                                </Button>

                                                <Button size="sm" className="ml-2" onClick={() => handerOrderRemove(order._id)} variant="outline-danger">
                                                    <FaTimes />
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </>}
                    </Container>
                </section>
                
            </Layout>
        </>
    )
}

export default AllOrder
