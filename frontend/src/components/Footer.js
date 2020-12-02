import React from 'react'
import { Container, Row, Col, Nav } from 'react-bootstrap'
import Terms from './TermsOService'

const Footer = () => {
    return (
       <footer style={{backgroundColor: "ghostwhite", fixed: 'bottom', padding: '40px'}}>
           <Container>
                <Row>
                    <Col>
                        <Nav.Link>
                            <i class="fab fa-facebook-f"></i>
                        </Nav.Link>
                    </Col>
                    <Col>
                        <Nav.Link>
                            <i class="fab fa-pinterest-square"></i>
                        </Nav.Link>
                    </Col>
                    <Col>
                        <Nav.Link>
                            <i class="fab fa-twitter"></i>
                        </Nav.Link>
                    </Col>
                    <Col>
                        <Nav.Link>
                            <i class="fab fa-instagram"></i>
                        </Nav.Link>
                    </Col>
                    </Row>
                    
                <Container className='pt-3'>
                    <Row   style={{fixed: 'bottom'}}>
                <Col className='text-center'>
                        
                            <Nav.Link href='/contact'>
                                Contact Us
                            </Nav.Link>
                            </Col>
                        <Col>
                        
                        <Nav.Link href='https://www.linkedin.com/in/haley-proctor/'>
                            Copyright &copy; Sonder
                        </Nav.Link>
                        {/* md={{ span: 6, offset: 6 }} */}
                        </Col>
                        <Col>
                        <Nav.Link href='/terms'>
                            Terms of Service
                        </Nav.Link>
                </Col>
                    </Row>
                </Container>
            </Container>
       </footer>
    )
}
export default  Footer