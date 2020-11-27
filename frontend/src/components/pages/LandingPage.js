import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import HomeCard from '../HomeCard'


const LandingPage = () =>{
    
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
    )})
    

        return (
            <>
                <h1>LandingPage</h1>
                <Row>
                {lHomes.map(home => (
                    <Col key={home._id} sm={12} md={12} lg={10} xl={10} >
                        <HomeCard home={home}/>
                    </Col>
                ))}
                </Row>
            </>
        )
    
}

export default LandingPage
