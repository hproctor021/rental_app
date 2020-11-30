import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button, Card, Col, Image, Container, Row } from 'react-bootstrap'

const NewHomeForm = () => {

    const dispatch = useDispatch()
    const descriptionInput = useSelector(state => state.descriptionInput)
    const locationInput = useSelector(state => state.locationInput)
    const daily_priceInput = useSelector(state => state.daily_priceInput)
    const bedroomInput = useSelector(state => state.bedroomInput)
    const bathroomInput = useSelector(state => state.bathroomInput)
    const imageInput = useSelector(state => state.imageInput)
   

    const handleDescriptionChange = (e) => {
        dispatch({
            type: 'SET_DESCRIPTION_INPUT',
            value: e.target.value
        })
    }

    const handleLocationChange = (e) => {
        dispatch({
            type: 'SET_LOCATION_INPUT',
            value: e.target.value
        })
    }

    const handleDailyPriceChange = (e) => {
        dispatch({
            type: 'SET_DAILY_PRICE_INPUT',
            value: e.target.value
        })
    }

    const handleBedroomChange = (e) => {
        dispatch({
            type: 'SET_BEDROOM_INPUT',
            value: e.target.value
        })
    }

    const handleBathroomChange = (e) => {
        dispatch({
            type: 'SET_BATHROOM_INPUT',
            value: e.target.value
        })
    }

    const handleImageChange = (e) => {
        dispatch({
            type: 'SET_IMAGE_INPUT',
            value: e.target.value
        })
    }

    const handleClick = () => {
        dispatch({
            type: 'SET_HOME',
            home: {
                description: descriptionInput,
                location: locationInput,
                daily_price: daily_priceInput,
                bedroom: bedroomInput,
                bathroom: bathroomInput,
                image: imageInput
            }
            
        })
    }

    return (

        <Container className='text-center'>
            <br /><br />
            <h3 className='navHome'>Tell Us About Your Home</h3> <br />
                <br />
                    <Form>
                        <Form.Group >
                            {/* <Form.Label>Name</Form.Label> */}
                            <Form.Control type="name" placeholder="Enter a Brief Home Description" onChange={(e) =>handleDescriptionChange(e)}/>
                        </Form.Group>


                        <Form.Group >
                            {/* <Form.Label>Email</Form.Label> */}
                            <Form.Control type="location" placeholder="Enter Location of your Home" onChange={(e) =>handleLocationChange(e)}/>
                        </Form.Group>

                        <Form.Group >
                            {/* <Form.Label>Username</Form.Label> */}
                            <Form.Control type="daily_price" placeholder="Enter Daily Price $" onChange={(e) =>handleDailyPriceChange(e)}/>
                        </Form.Group>

                        <Form.Group>
                            {/* <Form.Label>Password</Form.Label> */}
                            <Form.Control type="bedroom" placeholder="Enter Number of Bedroom(s)" onChange={(e) =>handleBedroomChange(e)}/>
                        </Form.Group>

                        <Form.Group>
                            {/* <Form.Label>Password</Form.Label> */}
                            <Form.Control type="bethroom" placeholder="Enter Number of Bathroom(s)" onChange={(e) =>handleBathroomChange(e)}/>
                        </Form.Group>

                        <br />
                        <Form.Group>
                            <Form.Label>Include Some 'Good Housekeeping' Kind of Photos to Better Highlight your Home ;)</Form.Label>
                            <br /><br />
                            <Form.File id="image" onChange={(e) =>handleImageChange(e)}/>
                        </Form.Group>
                        <br /><br />

                        <Button variant="primary" type="submit" onClick={handleClick}>
                            Submit Your Home
                        </Button>
                    </Form>

        </Container>
    )



}

export default NewHomeForm