import { CardDeck, Card, Row, Col } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


function FeaturesCards ({ home }) {

    const dispatch = useDispatch()
    const lHomes = useSelector(state => state.homes)
    
    useEffect(() => {
        fetch('http://localhost:3000/api/v1/homes')
        .then(res => res.json())
        .then(homes => {
            dispatch({
                type: 'SET_ALL_HOMES',
                homes: homes
            })
        }
    )}, [dispatch])


    function renderCards() {
        return (
            <>
            {/* {lHomes.map(home => (
                // <Row style={{flexDirection: 'row'}}>
                <CardDeck  className='cardGroupContainer' >
                {home.id === 25 || home.id === 19
                ?  (
                    <Col >
                        <Card >
                            <Link className='cardImage' to={`/api/v1/homes/${home.id}`}>
                                <Card.Img src={home.photos[2].image} className='homePhoto' fluid/>
                            </Link>
                            <div className="text-block" >
                                <h3>Feature Homes</h3>
                                <h6 className='text-center'>On Our List</h6>
                            </div>
                        </Card> 
                    </Col>)
                    : null }
                </CardDeck>
            // </Row>
            ))} */}

                <CardDeck>
                    <Col >
                        <Card >
                            <Link className='cardImage' to={`/api/v1/homes/41`}>
                                <Card.Img src='https://www.boutique-homes.com/wp-content/uploads/2013/04/modern_vacation_rentals_costa_blanca_spain_001-1.jpg' className='homePhoto' fluid/>
                            </Link>
                            <div className="text-block" >
                                <h3>Feature Homes</h3>
                                <h6 className='text-center'>On Our List</h6>
                            </div>
                        </Card> 
                    </Col>

                    <Col >
                        <Card >
                            <Link className='cardImage' to={`/api/v1/homes/47`}>
                                <Card.Img src='https://www.boutique-homes.com/wp-content/uploads/vacation-rentals/europe/malta/the-studio-valletta-malta/modern_vacation_rentals_valletta_malta_003.jpg' className='homePhoto' fluid/>
                            </Link>
                            <div className="text-block" >
                                <h3>Feature Homes</h3>
                                <h6 className='text-center'>On Our List</h6>
                            </div>
                        </Card> 
                    </Col>
                    </CardDeck>
            </>
    )}

    return (
        <>
           
            {lHomes ? renderCards() : null}
            
            
        </>
    )
}

export default FeaturesCards;