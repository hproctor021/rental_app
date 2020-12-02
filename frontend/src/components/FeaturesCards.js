import { Card, Image, Row, Col, Jumbotron, Button } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'


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


    return (
        <>
            <Jumbotron fluid>  
                  {lHomes.map(home => (
                    <Row>
                        {home.id === 3 || home.id === 2
                        ?   <Col sm={6}>
                                <Card>
                                    <Image src={home.photos[2].image} fluid />
                                </Card>
                            </Col>
                        :   null
                        }
                    </Row>
                  ))}
            </Jumbotron>
        </>
    )
}

export default FeaturesCards;