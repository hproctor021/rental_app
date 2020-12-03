import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card, Col, Image, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const UserProfile = () => {

    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    // const allUsers = useSelector(state => state.users)

    // useEffect(() => {
    //     fetch('http://localhost:3000/api/v1/users')
    //     .then(res => res.json())
    //     .then(users => {
    //         dispatch({
    //             type: 'SET_ALL_USERS',
    //             users: users
    //         })
    //     }
    // )}, [dispatch])

    return(
        <>
            <Container style={{padding: '100px'}}>
                <Row>
                    <Col sm={3}>
                        <Card style={{border:'white'}}>
                            <Card.Body className='text-center'>
                                <Card.Title>
                                    <Image src="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png" roundedCircle fluid/>
                                    {/* <Image src={user.image} thumbnail fluid/> */}
                                </Card.Title>
                                <Card.Text>
                                    <Link to={`/users/edit`}>
                                        <Button>Edit Account</Button>
                                    </Link>
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