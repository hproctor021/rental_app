import React from 'react'
import { Form, Container, Button} from 'react-bootstrap'


const ContactForm = () => {

    return (

        <Container className='text-center'>
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
                <Button variant="primary" type="submit" href='/'>
                    Send
                </Button>
            </Form>
        </Container>

    )
}

export default ContactForm