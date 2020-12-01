import React from 'react'
import { Container, Row, Col, Nav } from 'react-bootstrap'

export default function Footer() {
    return (
       <footer>
           <Container>
                <Row>
                    <Col>
                    <Nav>
                        <Nav.Link href='/contact'>
                            Contact Us
                        </Nav.Link>
                    </Nav>
                    </Col>
                </Row>
                <Row>
                    <Col className='text-center py-3'>
                        Copyright &copy; Sonder
                    </Col>
                </Row>
            </Container>
       </footer>
        
    )
}