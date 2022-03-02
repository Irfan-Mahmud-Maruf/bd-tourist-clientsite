import { Container } from "react-bootstrap"
import { Link } from 'react-router-dom'
import Layout from "../components/shared/Layout"


const Error404 = () => {
    return (
        <>
            <Layout>
                <section className="be-error-404">
                    <Container className="d-flex flex-column justify-content-center align-items-center">
                        <img src={'https://img.freepik.com/free-vector/traffic-sign-page-404-found-flat-illustration_80328-232.jpg?w=1380'} alt="" className="w-75"/>

                        <p>
                            <Link className="btn btn-outline-secondary" to={`/`}>
                                Get back to homepage
                            </Link>
                        </p>
                    </Container>
                </section>
            </Layout>
        </>
    )
}

export default Error404
