import React, { useEffect } from 'react'
import { Carousel, Image, Col, Row, ListGroup, Container, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import Rezi from '../ReservationCard'

const HomeShowPage = ({ match }) => {

    const dispatch = useDispatch()
    const home = useSelector(state => state.home)
    const display = useSelector(state => state.display)


    useEffect(() => {
        fetch(`http://localhost:3000/api/v1/homes/${match.params.id}`)
        .then(res => res.json())
        .then(home => {
            dispatch({
                type: 'SET_HOME',
                home: home,
                loading: false
            })
        }
    )}, [dispatch, match])

    const handleClick = () => {
        dispatch({
            type: 'TOGGLE_DISPLAY',
            display: display
        })
    }

    function renderCarousel() {
        return (
            
            <Carousel>
                    {home.photos.map(photo => (
                        <Carousel.Item interval={4000}>
                            <Image
                            className="d-block w-100"
                            src={photo.image}
                            alt="home photos"
                            rounded />
                            <Carousel.Caption>
                            <div style={{backgroundColor: 'black', color: 'white', opacity: '55%', position: 'flex', borderRadius: '5px'}}>{photo.image_name}</div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            
        )
    }



    return (
        <>
            <div style={{padding: '80px'}}>
                <Container className='text-center'>
                    <Row>
                        <Col>
                            <h3 className='navHome'>{home.location}</h3>
                        </Col>
                    </Row>
                </Container>
                {home.photos ? renderCarousel() : null}
                <br /><br />
                <ListGroup variant="flush">
                    <ListGroup.Item as='h4' className='navHome'>{home.description}</ListGroup.Item>
                    <ListGroup.Item><i class="fas fa-home"></i>   Your Amenities Include:</ListGroup.Item>
                    <ListGroup.Item><i class="fas fa-bed"></i>   Bedrooms: {home.bedroom}</ListGroup.Item>
                    <ListGroup.Item><i class="fas fa-bath"></i>   Bathrooms: {home.bathroom}</ListGroup.Item>
                    <ListGroup.Item><i class="fas fa-user-friends"></i>   Accommodates: {home.accommodates} guests</ListGroup.Item>
                    {home.pets_allowed
                    ? <ListGroup.Item><i class="fas fa-dog"></i>   Pet Friendly : yes</ListGroup.Item>
                    : <ListGroup.Item><i class="fas fa-dog"></i>   Pet Friendly : no</ListGroup.Item>
                    }
                    {home.internet
                    ? <ListGroup.Item><i class="fas fa-wifi"></i>   Wifi : yes</ListGroup.Item>
                    : <ListGroup.Item><i class="fas fa-wifi"></i>   Wifi : no</ListGroup.Item>
                    }
                    {home.central_air
                    ? <ListGroup.Item><i class="fas fa-wind"></i>   A/C : yes</ListGroup.Item>
                    : <ListGroup.Item><i class="fas fa-wind"></i>   A/C : no</ListGroup.Item>
                    }
                    {home.heating
                    ? <ListGroup.Item><i class="fas fa-fire"></i>   Heating : yes</ListGroup.Item>
                    : <ListGroup.Item><i class="fas fa-fire"></i>   Heating : no</ListGroup.Item>
                    }
                    {home.tv
                    ? <ListGroup.Item><i class="fas fa-tv"></i>   TV : yes</ListGroup.Item>
                    : <ListGroup.Item><i class="fas fa-tv"></i>   TV : no</ListGroup.Item>
                    }
                    <ListGroup.Item><i class="fas fa-dollar-sign"></i>  {home.daily_price} / night</ListGroup.Item>
                </ListGroup>
                <br />
                <Container className='text-center' onClick={handleClick}>
                    <Button>Make A Reservation</Button>
                </Container>
            </div>
            <Container>
                { display
                ? <Rezi />
                : null }
            </Container>
        </>
    )
}

export default HomeShowPage
