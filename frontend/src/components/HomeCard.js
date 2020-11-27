import React from 'react'
import { Card } from 'react-bootstrap'
import HomeShowPage from './pages/HomeShowPage'
import { Link } from 'react-router-dom'


function HomeCard ({ home }) {

    return (
        <Card className='my-3 p-3 rounded'>
        
            <Card.Body>
                <Link to={`/api/v1/homes/${home.id}`}>
                    <Card.Title as='div'><strong>{home.location}</strong></Card.Title>
                </Link>
                <Card.Text>{home.description}</Card.Text>
                <Card.Text as='h3'>${home.daily_price}</Card.Text><h6>/night</h6>
                <Card.Text> </Card.Text>
                <hr></hr>
                <Card.Text><small>Accomodates: {home.accommodates} guests</small></Card.Text>
            </Card.Body>
        </Card>
    )
}

export default HomeCard;
