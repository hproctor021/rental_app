import React, { useEffect } from 'react'
import { Navbar, Container, NavDropdown } from 'react-bootstrap'
import { LinkContainer} from 'react-router-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Header({ match }) {
    
    const dispatch = useDispatch()
    const user = useSelector(state=> state.user)
  

    // useEffect(() => {
    //     fetch(`http://localhost:3000/api/v1/users/${match.params.id}`)
    //     .then(res => res.json())
    //     .then(user => {
    //         dispatch({
    //             type: 'SET_USER',
    //             user: user,
    //             loggedIn: true
    //         })
    //     }
    // )}, [dispatch])

    const handleClick = () => {
        dispatch({
            type: 'SET_USER',
            user: null
        })
    }


    return (
        <header>
            <Navbar bg="light" expand="lg">
                <Container>
                    <LinkContainer to='/'>
                    <Navbar.Brand className='navHome'>SONDER | <small>explore more</small></Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <NavDropdown title='Menu' id="basic-nav-dropdown" className='ml-auto'>                        
                            {user
                            ? <>
                                <NavDropdown.Item><Link to={`/`} onClick={handleClick}>Logout</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to={`/users/profile`}>My Account</Link></NavDropdown.Item>
                              </>
                            : ( <>
                                <NavDropdown.Item><Link to={`/login`}>Login</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to={`/register`}>Sign Up</Link></NavDropdown.Item>
                            </>)}
                        </NavDropdown>
                    </Navbar.Collapse>
                </Container>
                </Navbar>         
        </header>
    )
}
