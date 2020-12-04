import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card, Col, Image, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const UserProfile = () => {

    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const homes = useSelector(state => state.homes)
    const doDisplay = useSelector(state => state.doDisplay)
    const doTwoDisplay = useSelector(state => state.doTwoDisplay)


    // function renderRes() {
    //     return(
    //         <div>
    //             {user.reservations.map(res => (
    //                 <Card>
    //                     <Card.Img variant="top" src={res.home.photos[1].image} />
    //                     <Card.Body>
    //                         <Card.Title>
    //                         {res.home.location}
    //                         </Card.Title>
    //                         <Card.Text>
    //                             Reserved for {res.start_date} - {res.end_date}
    //                         </Card.Text>
    //                     <Button >Cancel Reservation</Button>
    //                     </Card.Body>
    //                 </Card>
    //             ))}
    //         </div>  
    //     )
    // }


    const handleClick = () => {
        dispatch({
            type: 'CHANGE_DISPLAY',
            doDisplay: doDisplay
        })
    }

    const handleClickTwo = () => {
        dispatch({
            type: 'CHANGE_TWO_DISPLAY',
            doTwoDisplay: doTwoDisplay
        })
    }

    return(
        <>
            <Container style={{padding: '100px'}}>
                <Row>
                    <Col sm={3}>
                        
                        <Card style={{border:'white'}}>
                            <Card.Body className='text-center'>
                                <Card.Title>
                                    {/* <Image src="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png" roundedCircle fluid/> */}
                                    <Image src={user.image} thumbnail fluid/>
                                </Card.Title>
                                <Card.Text>
                                    <Link to={`/users/edit`}>
                                        <Button size='sm' onClick={handleClick}>Edit Account</Button>
                                    </Link>
                                </Card.Text>
                                {/* <Card.Text>
                                    <Button href='/user/list_home'>List a Home</Button>
                                </Card.Text> */}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={6} md={8}>
                    <h3 className='navHome'> Upcoming Reservations</h3> <br />
                    
                    { doDisplay
                    ? (<Card>
                        <Link to='/api/v1/homes/21'>
                            <Card.Img className='homePhoto' variant="top" src='https://www.boutique-homes.com/wp-content/uploads/2015/10/holiday_homes_sri_lanka_048.jpg' />
                        </Link>
                        <Card.Body>
                            <Card.Title>
                            Galle, Sri Lanka
                            </Card.Title>
                            <Card.Text>
                                Reserved for 12/24/2020 - 01/3/2021
                            </Card.Text>
                        <Button onClick={handleClick}>Cancel Reservation</Button>
                        </Card.Body>
                    </Card> )
                    : null }

                    { doTwoDisplay
                    ? (<Card>
                        <Link to='/api/v1/homes/25'>
                            <Card.Img className='homePhoto' variant="top" src='https://www.boutique-homes.com/wp-content/uploads/vacation-rentals/europe/malta/the-studio-valletta-malta/modern_vacation_rentals_valletta_malta_003.jpg' />
                        </Link>
                        <Card.Body>
                            <Card.Title>
                            Valletta, Malta
                            </Card.Title>
                            <Card.Text>
                                Reserved for 02/10/2021 - 02/16/2021
                            </Card.Text>
                        <Button onClick={handleClickTwo}>Cancel Reservation</Button>
                        </Card.Body>
                    </Card> )
                    : null }
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default UserProfile