import { CardGroup, Card } from 'react-bootstrap'
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
            {lHomes.map(home => (
                <CardGroup className="container">
                {home.id === 25 || home.id === 19
                ?  (
                    <Card classname='py-2'>
                        <Link to={`/api/v1/homes/${home.id}`}>
                            <Card.Img src={home.photos[2].image} className='homePhoto' fluid/>
                        </Link>
                        <div className="text-block" >
                            <h3>Feature Homes</h3>
                            <h6 className='text-center'>On Our List</h6>
                        </div>
                    </Card> )
                    : null }
                </CardGroup>
            ))}
            </>
    )}

    return (
        <>
           
            {lHomes ? renderCards() : null}
            
            
        </>
    )
}

export default FeaturesCards;