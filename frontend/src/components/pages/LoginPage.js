import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button } from 'react-bootstrap'

const Login = () => {

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

    const handleClick = () => {
        dispatch({
            type: 'SET_USER',
            user: {
                username: usernameInput,
                password: passwordInput
            }
            
        })
    }

    return(
        <>
            <h3>Login Page</h3>
            <Form>
                <Form.Group >
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="username" placeholder="Enter Username" onChange={(e) =>handleUsernameChange(e)}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e) =>handlePasswordChange(e)}/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleClick}>
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default Login