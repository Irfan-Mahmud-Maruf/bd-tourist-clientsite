import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HiUser } from "react-icons/hi";
import useAuth from '../../../hooks/useAuth';


const Navigation = () => {
    const { user, signoutHandler } = useAuth()

    return (
        <header>
            <Navbar className="navbar-primary" expand="sm" bg="dark" variant="dark" sticky="top">
                <Container >
                    <Navbar.Brand href={`/`}>BD Tourist</Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbarPrimary" />
                    
                    <Navbar.Collapse id="navbarPrimary" >       
                        <Nav className="mx-auto">
                            {user.email && <>    
                                <Nav.Link href={`/`}>Home</Nav.Link>
                                <Nav.Link href={`/dashboard/my-orders`}>My Order</Nav.Link>
                                <Nav.Link href={`/dashboard/orders`}>Orders</Nav.Link>
                                <Nav.Link href={`/dashboard/services`}>Add service</Nav.Link>
                            </>}  
                        </Nav>          
                        
                        <Nav className="user-profile">
                            {/* Anonymas State */}
                            { !user.email && <>
                                <Nav.Link href={`/login`}><HiUser/> Login</Nav.Link>
                                <Nav.Link href={`/register`}>Register</Nav.Link>
                            </>}

                            {/* Loggedin state */}
                            {user.email && <>
                                <Navbar.Text>
                                    {user?.displayName?user?.displayName:'Nameless'} | 
                                </Navbar.Text>
                                <Nav.Link onClick={ () => signoutHandler()}>Sign out</Nav.Link>
                            </>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Navigation