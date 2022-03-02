import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HiUser } from "react-icons/hi";
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Navigation = () => {
    const { user, signoutHandler } = useAuth()

    return (
        <header>
            <Navbar className="navbar-primary" expand="sm" bg="light" sticky="top">
                <Container >
                    <NavLink className="navbar-brand" to={`/`}>BD Tourist</NavLink>

                    <Navbar.Toggle aria-controls="navbarPrimary" />
                    
                    <Navbar.Collapse id="navbarPrimary" >       
                        <Nav className="mx-auto">
                            {user.email && <>    
                                <NavLink className="nav-link" to={`/`}>Home</NavLink>
                                <NavLink className="nav-link" to={`/dashboard/my-orders`}>My Order</NavLink>
                                <NavLink className="nav-link" to={`/dashboard/orders`}>Orders</NavLink>
                                <NavLink className="nav-link" to={`/dashboard/services`}>Add service</NavLink>
                                <NavLink className="nav-link" to={`/addreview`}>Add Review</NavLink>
                            </>}  
                        </Nav>          
                        
                        <Nav className="user-profile">
                            { !user.email && <>
                                <NavLink className="nav-link" to={`/login`}> <HiUser/> Login</NavLink>
                                <NavLink className="nav-link" to={`/register`}>Register</NavLink>
                            </>}

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