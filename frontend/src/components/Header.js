import React from 'react'
import { Navbar, Container, NavDropdown } from 'react-bootstrap'
import { LinkContainer} from 'react-router-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


export default function Header() {

    const user = useSelector(state=> state.user)
    const { loggedIn } = user


    return (
        <header>
            <Navbar bg="light" expand="lg">
                <Container>
                    <LinkContainer to='/'>
                    <Navbar.Brand className='navHome'>SONDER | <small>explore more</small></Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <NavDropdown title='User Options' id="basic-nav-dropdown" className='ml-auto'>                        
                            {loggedIn
                            ? <>
                                <NavDropdown.Item href="/">Logout</NavDropdown.Item>
                                <NavDropdown.Item><Link to={`/api/v1/users/profile`}>My Account</Link></NavDropdown.Item>
                              </>
                            : ( <>
                                <NavDropdown.Item href="/api/v1/login">Login</NavDropdown.Item>
                                <NavDropdown.Item href="/api/v1/register">Sign Up</NavDropdown.Item>
                            </>)}
                        </NavDropdown>
                    </Navbar.Collapse>
                </Container>
                </Navbar>         
        </header>
    )
}
