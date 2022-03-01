import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { Button, Col, Offcanvas, Row, Spinner, Stack } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';


const ServiceAddNew = () => {
    const [loading, setLoading] = useState()  // Add service loader.
    const [show, setShow] = useState(false);
    const { message } = useAuth()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const handleAddNew = (data) => {
        console.log('New Service')
        setLoading(true)

        const url = `${process.env.REACT_APP_API_URL}/service`

        fetch(url, {
            method: 'put',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(data => {
            setLoading(false)
            console.log(data)
        })

    }


    return (
        <>
            <Button className="ml-auto be-new-service btn btn-secondary" onClick={handleShow} >
                Add new
            </Button>
            

            <Offcanvas className="be-add-ne-service" show={show} onHide={handleClose} placement='bottom'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title></Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body>
                    <Formik 
                    initialValues={{title: '', brief: '', cost: '', day: '', image: ''}}
                    validate={values => {
                        const errors = {};
    
                        // Error: Title 
                        if ( !values.title) {
                            errors.title = "Required"
                        }
                        // Error: Brief 
                        if ( !values.brief) {
                            errors.brief = "Required"
                        }
                        // Error: Cost 
                        if ( !values.cost) {
                            errors.cost = "Required"
                        }
                        // Error: Duration 
                        if ( !values.day) {
                            errors.day = "Required"
                        }
                        // Error: Image 
                        if ( !values.image) {
                            errors.image = "Required"
                        }
    
                        return errors;
                    }}
                    onSubmit={values => handleAddNew(values)}
                    // onSubmit={async (values) => {
                    //     await new Promise((r) => setTimeout(r, 500));
                    //     alert(JSON.stringify(values, null, 2));
                    //   }}
                    >
                        {({values}) => (

                            <Form>
                                <h3 className="mb-4 ">Add a service</h3>

                                {message && <>
                                    <div className="message-box text-light bg-custom p-3 mt-3 mb-4">
                                        {message && <p>{message}</p>}
                                    </div>
                                </>}
                                <Row>
                                    <Col lg={5} md={5} sm={12}>
                                        <Stack className="mb-2" direction="vertical">
                                            <Field className="mb-2" type="text" name="title" placeholder="Title" />
                                            <ErrorMessage name="title" className="text-red" component="p" />
                                        </Stack>

                                        <Stack className="mb-2" direction="vertical">
                                            <Field className="mb-2" type="url" name="image" placeholder="Image URI" />
                                            <ErrorMessage name="image" className="text-red" component="p" />
                                        </Stack>

                                        <Stack className="mb-2" direction="vertical">
                                            <Field className="mb-2" type="number" name="cost" placeholder="Tour cost" />
                                            <ErrorMessage name="cost" className="text-red" component="p" />
                                        </Stack>

                                        <Stack className="mb-2" direction="vertical">
                                            <Field className="mb-2" type="text" name="day" placeholder="Duration" />
                                            <ErrorMessage name="day" className="text-red" component="p" />
                                        </Stack>
                                    </Col>

                                    <Col lg={7} md={7} sm={12}>
                                        <Stack className="mb-2 textarea-vstack" direction="vertical">
                                            <Field className="mb-2" component="textarea" name="brief" placeholder="Write in details here..." />
                                            <ErrorMessage name="brief" className="text-red" component="p" />
                                        </Stack>
                                    </Col>
                                </Row>

                                <Button type="submit" className="ml-auto be-new-service outline-dark" variant="custom" disabled={loading}>
                                    {loading ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> : 'Save'}
                                        
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default ServiceAddNew
