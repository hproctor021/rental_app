import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button, Card, Col, Image, Container, Row } from 'react-bootstrap'

const UserProfile = () => {

    

    return(
        <>
            <Container>
                <Row>
                    <Col sm={3}>
                        <Card style={{border:'white'}}>
                            <Card.Body className='text-center'>
                                <Card.Title>
                                    <Image src="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png" roundedCircle fluid/>
                                </Card.Title>
                                <Card.Text>
                                    <Button href='/api/v1/users/:id/edit'>Edit Account</Button>
                                </Card.Text>
                                <Card.Text>
                                    <Button href='/user/list_home'>List a Home</Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>


                    <Col sm={9}>
                    <h3 className='navHome'> Upcoming Reservations</h3> <br />
                    <Card>
                        <Card.Img variant="top" src="https://www.boutique-homes.com/wp-content/uploads/2020/09/Riad_in_Marrakech_003.jpg" />
                        <Card.Body>
                            <Card.Title>
                            'home.location'
                            </Card.Title>
                            <Card.Text>
                                Reserved for 'reservation.start_date' - 'reseravtion.end_date'
                            </Card.Text>
                        <Button>Cancel Reservation</Button>
                        </Card.Body>
                    </Card>
                    <br /><br />

                    <Card>
                        <Image variant="top" src="https://www.boutique-homes.com/wp-content/uploads/2019/05/holiday_home_portugal_023.jpg" fluid />
                        <Card.Body>
                            <Card.Title>
                            'home.location'
                            </Card.Title>
                            <Card.Text>
                                Reserved for 'reservation.start_date' - 'reseravtion.end_date'
                            </Card.Text>
                        <Button>Cancel Reservation</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default UserProfile