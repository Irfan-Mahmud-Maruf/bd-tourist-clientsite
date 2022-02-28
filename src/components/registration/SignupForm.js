import { ErrorMessage, Field, Form, Formik } from 'formik'
import { Button, Container, Stack } from 'react-bootstrap'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'


const SigninForm = () => {
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    console.log("From: ", from)

    const { 
        auth,
        user,
        message,
        signupWithFormHandler,
        signinWith0Handler
    } = useAuth()
    

    return (
        <>
            { user.email && navigate(from) }
            
            { !user.email && <>
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
                        signupWithFormHandler(values)

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
                                <h3 className="mb-4">Register now</h3>

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

                                <Button type="submit" className='w-100' variant="secondary" >Register</Button>
                            </Form>
                        )}
                    </Formik>

                    <div className="d_0_auth mb-4">
                        <Button className="btn mt-3 w-100" variant="outline-secondary" onClick={() => signinWith0Handler('google')}>Google</Button>
                    </div>

                    <div className="link">
                        <p className="text-center">Already have an account? <Link to="/login">Log in</Link></p>
                    </div>
                </Container>
            </>}
        </>
    )
}

export default SigninForm
