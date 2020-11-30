import React from 'react'
import { Navbar, Container, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


export default function Header() {
    return (
        <header>
            <Navbar bg="light" expand="lg">
                <Container>
                    <LinkContainer to='/'>
                    <Navbar.Brand className='navHome'>SONDER | <small>explore more</small></Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <NavDropdown title='UserAccount' id="basic-nav-dropdown" className='ml-auto'>
                            <NavDropdown.Item href="/api/v1/login">Login</NavDropdown.Item>
                            <NavDropdown.Item href="/api/v1/register">Sign Up</NavDropdown.Item>
                            <NavDropdown.Item href={`/api/v1/users/:id/profile`}>My Account</NavDropdown.Item>
                            <NavDropdown.Divider />
                            {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                        </NavDropdown>
                    </Navbar.Collapse>
                </Container>
                </Navbar>         
        </header>
    )
}
