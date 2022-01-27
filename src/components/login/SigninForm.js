import { ErrorMessage, Field, Form, Formik } from 'formik'
import { Link } from 'react-router-dom'
import { useLocation, Navigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import { Container, Stack, Button } from 'react-bootstrap'


const SigninForm = () => {
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    const { 
        auth,
        message,
        signinWithFormHandler,
        signinWith0Handler
    } = useAuth()

    return (
        <>
            
            { auth && <>
                <Container className="be-login-form">
                    <Formik 
                    initialValues={{email: '', password: ''}}
                    validate={values => {
                        const errors = {};
    
                        // Error: Email
                        if (!values.email) {
                        errors.email = 'Required';
                        } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                        errors.email = 'Invalid email address';
                        }
    
                        // Error: Message 
                        if ( !values.password) {
                            errors.password = "Required"
                        }
    
                        return errors;
                    }}
                    onSubmit={values => {
                        signinWithFormHandler(values)

                        if(auth.user) {
                            <Navigate to={from} />
                        }
                    }}
                    // onSubmit={async (values) => {
                    //     await new Promise((r) => setTimeout(r, 500));
                    //     alert(JSON.stringify(values, null, 2));
                    //   }}
                    >
                        {({values}) => (

                            <Form>
                                <h3 className="mb-4">Sign in now</h3>

                                {message && <>
                                    <div className="message-box text-light bg-custom p-3 mt-3 mb-4">
                                        {message && <p>{message}</p>}
                                    </div>
                                </>}
                                    
                                <Stack className="mb-2" direction="vertical">
                                    <Field className="mb-2" type="email" name="email" placeholder="Email" />
                                    <ErrorMessage name="email" className="text-red" component="p" />
                                </Stack>
                                
                                <Stack className="mb-2" direction="vertical">
                                    <Field className="mb-2" type="password" name="password" placeholder="Password" />
                                    <ErrorMessage name="password" className="text-red" component="p" />
                                </Stack>

                                <Button type="submit" className="" variant="custom">Log in</Button>
                            </Form>
                        )}
                    </Formik>

                    <div className="d_0_auth mb-4">
                        <Button className="btn mt-3" variant="custom" onClick={() => signinWith0Handler('google')}>Google</Button>
                    </div>

                    <div className="link">
                        <p className="text-center">Have no account? <Link to="/register">Register a new account</Link></p>
                    </div>
                </Container>
            </>}
        </>
    )
}

export default SigninForm
