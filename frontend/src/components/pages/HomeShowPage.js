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
                            />
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
                    <ListGroup.Item>Your Amenities Include:</ListGroup.Item>
                    <ListGroup.Item>Bedrooms: {home.bedroom}</ListGroup.Item>
                    <ListGroup.Item>Bathrooms: {home.bathroom}</ListGroup.Item>
                    <ListGroup.Item>Accommodates: {home.accommodates} guests</ListGroup.Item>
                    {home.pets_allowed
                    ? <ListGroup.Item>Pet Friendly : yes</ListGroup.Item>
                    : <ListGroup.Item>Pet Friendly : no</ListGroup.Item>
                    }
                    {home.internet
                    ? <ListGroup.Item>Wifi : yes</ListGroup.Item>
                    : <ListGroup.Item>Wifi : no</ListGroup.Item>
                    }
                    {home.central_air
                    ? <ListGroup.Item>A/C : yes</ListGroup.Item>
                    : <ListGroup.Item>A/C : no</ListGroup.Item>
                    }
                    {home.heating
                    ? <ListGroup.Item>Heating : yes</ListGroup.Item>
                    : <ListGroup.Item>Heating : no</ListGroup.Item>
                    }
                    {home.tv
                    ? <ListGroup.Item>TV : yes</ListGroup.Item>
                    : <ListGroup.Item>TV : no</ListGroup.Item>
                    }
                    <ListGroup.Item>${home.daily_price} / night</ListGroup.Item>
                </ListGroup>
                <br />
                <Container className='text-center' onClick={handleClick}>
                    <Button>Reserve Home</Button>
                </Container>
            </div>
            {display
            ? <Rezi />
            : null}
        </>
    )
}

export default HomeShowPage
