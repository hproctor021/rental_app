import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button, Card, Container } from 'react-bootstrap'
import { Redirect, useHistory } from 'react-router-dom'

const Login = () => {

    let history = useHistory()
    const dispatch = useDispatch()
    const usernameInput = useSelector(state=> state.usernameInput)
    const passwordInput = useSelector(state => state.passwordInput)

    const handleUsernameChange = (e) => {
        dispatch({
            type: 'SET_USERNAME_INPUT',
            value: e.target.value
        })
    }

    const handlePasswordChange = (e) => {
        dispatch({
            type: 'SET_PASSWORD_INPUT',
            value: e.target.value
        })
    }


    
    const handleClick = (e) => {
        e.preventDefault()
        // e.target.reset()
        
        fetch('http://localhost:3000/api/v1/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username: usernameInput,
                password: passwordInput
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            localStorage.token = data.token
            dispatch({
                type: 'SET_USER',
                user: data.user
            })
            dispatch({
                type: 'SET_PASSWORD_INPUT',
                value: ''
            })
            history.push('/users/profile')
        })
    }


    return(
        <> 
        <main className='py-4' style={{padding: '100px'}}>
        <Container>
            
            <Card style={{width:'700px', border:'white'}} className='text-center' >
                <Card.Body >
                    <Card.Text className='navHome'>
                        Welcome Back!
                    </Card.Text>
                    <Card.Title>
                        <h3 className='navHome'>Login to Get Started</h3>
                    </Card.Title>
                    <br/>
                    <Form >
                        <Form.Group >
                            <Form.Control type="username" placeholder="Enter Username" onChange={(e) =>handleUsernameChange(e)}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Control type="password" placeholder="Password" onChange={(e) =>handlePasswordChange(e)}/>
                        </Form.Group>
                        <br /><br />
                        
                        <Button variant="primary" onClick={handleClick}>
                            Login
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
        </main>
        </>
    )
}

export default Login