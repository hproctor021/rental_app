import React from 'react'
import { Card, Image } from 'react-bootstrap'
import HomeShowPage from './pages/HomeShowPage'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'


function HomeCard ({ home }) {

    return (
        <Card className='my-3 p-3 rounded' style={{border:'white'}}>
        
            <Card.Body>
                <Link to={`/api/v1/homes/${home.id}`}>
                    <Card.Title as='h4'>{home.location}</Card.Title>
                </Link>

                <Link to={`/api/v1/homes/${home.id}`}>
                    <Image src={home.photos[0].image} className='homePhoto' fluid />
                </Link>
                <br /><br />

                <Card.Text>{home.description}</Card.Text>
                <Card.Text className='text-center' as='h3'>${home.daily_price}</Card.Text><h6 className='text-center'>/night</h6>
                <br />
                {/* <Card.Text><small>Accomodates: {home.accommodates} guests</small></Card.Text> */}
            </Card.Body>
        </Card>
    )
}

export default HomeCard;
