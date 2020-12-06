import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button, Card, Col, Image, Container, Row } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'


const UserUpdateForm = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const user = useSelector(state => state.user)
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
        // e.target.reset()
        
        fetch(`http://localhost:3000/api/v1/users/${user.id}/edit`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                full_name: nameInput,
                image: imageInput,
                email: emailInput,
                username: usernameInput,
                password: passwordInput
            })
        })
        .then(res => res.json())
        alert("Your account has been successfully updated!") 
        history.push('/users/profile')
    }

    return (

        <>
            <div style={{padding: '100px', textAlign: 'center'}}>
            <h3 className='navHome'>Update Account Information</h3> <br />

                    <Form>
                        <Form.Group >
                            {/* <Form.Label>Name</Form.Label> */}
                            <Form.Control type="name" placeholder="Enter Full Name" onChange={(e) =>handleNameChange(e)}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.File id="image" label="Upload a New Image:" onChange={(e) =>handleImageChange(e)}/>
                        </Form.Group>

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
                        <br />
                        <Button variant="primary" type="submit" onClick={handleClick}>
                            Save Changes
                        </Button>
                    </Form>
                </div>

        </>
    )



}

export default UserUpdateForm