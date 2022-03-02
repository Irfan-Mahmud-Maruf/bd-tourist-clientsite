import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { Button, Card, Container, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/shared/Layout';
import useAuth from '../../hooks/useAuth';

const AddReview = () => {
    const {user} = useAuth();
    let navigate = useNavigate();

    const handleReview = (data) => {

        const url = `${process.env.REACT_APP_API_URL}/reviews`

        fetch(url, {
            method: 'put',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(data => {
            handleShow()
        })

    }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Layout>
            <Container>
                <div>
                    <img src={`https://img.freepik.com/free-vector/customer-feedback-management-flat-vector-illustration-cartoon-happy-tiny-people-voting-giving-review-company-service-crm-advices-assessment-concept_74855-9834.jpg?w=1380`} alt="" className='w-100'/>
                </div>
                <Card>
                    <Formik
                      initialValues={{
                        uid: user.uid,
                        username: '',
                        reviews: '',
                        rating: '',
                      }}
                      onSubmit={values => handleReview(values)}
                    >
                      <Form className='d-flex flex-column w-50 mx-auto my-5'>
                        <Field className="form-control mb-2" type="hidden" name="uid" value={user.uid}/>
                        <Field id="username" className="form-control mb-2" name="username" placeholder=" Your name here..." required />
                        <Field component="textarea" id="reviews" className="form-control mb-2" name="reviews" placeholder="Type review here..." required />
                        <Field id="rating" className="form-control mb-2" min="1" max="5" name="rating" placeholder="1-5" type="number" required />
                        <button type="submit" className='btn btn-secondary'>Submit</button>
                      </Form>
                    </Formik>
                </Card>
                

                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>BD Tourist</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Thanks for your support</Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={()=> navigate("/")}>
                        Back to Home
                      </Button>
                    </Modal.Footer>
                  </Modal>
            </Container>
        </Layout>
        
    );
};

export default AddReview;<h1>add review</h1>
