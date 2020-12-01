import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button, Container } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

const Register = () => {

    let history = useHistory()
    const dispatch = useDispatch()
    const nameInput = useSelector(state => state.nameInput)
    const imageInput = useSelector(state => state.imageInput)
    const emailInput = useSelector(state => state.emailInput)
    const usernameInput = useSelector(state => state.usernameInput)
    const passwordInput = useSelector(state => state.passwordInput)
   

    const handleNameChange = (e) => {
        dispatch({
            type: 'SET_NAME_INPUT',
            value: e.target.value
        })
    }

    const handleImageChange = (e) => {
        dispatch({
            type: 'SET_IMAGE_INPUT',
            value: e.target.value
        })
    }

    const handleEmailChange = (e) => {
        dispatch({
            type: 'SET_EMAIL_INPUT',
            value: e.target.value
        })
    }

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

        fetch('http://localhost:3000/api/v1/register', {
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
                user: {
                    name: nameInput,
                    image: imageInput,
                    email: emailInput,
                    username: usernameInput,
                    password: passwordInput,
                    loggedIn: true
                }    
            })
            history.push('/')
        })
    }


    return(
        <Container className='text-center'>
            <br />
            <h3 className='navHome'>Register</h3>
            <div className='navHome'>To Start Planning Your Next Adventure</div>
            <br /><br />
            <Form>
                <Form.Group >
                    {/* <Form.Label>Name</Form.Label> */}
                    <Form.Control type="name" placeholder="Enter Full Name" onChange={(e) =>handleNameChange(e)}/>
                </Form.Group>
                
                <Form.Group>
                    <Form.File id="image" label="Let Us See Your Beautiful Face" onChange={(e) =>handleImageChange(e)}/>
                </Form.Group>
                <br />
                
                <Form.Group >
                    {/* <Form.Label>Email</Form.Label> */}
                    <Form.Control type="email" placeholder="Enter Email" onChange={(e) =>handleEmailChange(e)}/>
                </Form.Group>

                <Form.Group >
                    {/* <Form.Label>Username</Form.Label> */}
                    <Form.Control type="username" placeholder="Enter Username" onChange={(e) =>handleUsernameChange(e)}/>
                </Form.Group>

                <Form.Group>
                    {/* <Form.Label>Password</Form.Label> */}
                    <Form.Control type="password" placeholder="Password" onChange={(e) =>handlePasswordChange(e)}/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleClick}>
                    Join
                </Button>
            </Form>
        </Container>
    )
}

export default Register