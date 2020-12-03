import React from 'react'
import { Form, Container, Button} from 'react-bootstrap'


const ContactForm = () => {

    const handleClick = () => {
        alert("Your message has been successfully sent!") 
    }


    return (

        <Container className='text-center' style={{padding: '100px'}}>
            <br /><br />
            <h3 className='navHome'>What's On Your Mind? </h3>
            <small>Someone Will Get Back to You Within Two Business Days</small>
            <br /><br />
            <Form>
                <Form.Group>
                    <Form.Control placeholder='Name' />
                </Form.Group>
                <Form.Group>
                    <Form.Control placeholder='Email' />
                </Form.Group>
                <Form.Group>
                    <Form.Control placeholder='Subject' />
                </Form.Group>
                <Form.Group>
                    <Form.Control as='textarea' placeholder='Message Content' />
                </Form.Group>
                <br />
                <Button variant="primary" type="submit" href='/' onClick={handleClick}>
                    Send
                </Button>
            </Form>
        </Container>

    )
}

export default ContactForm