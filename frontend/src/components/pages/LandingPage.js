import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Container } from 'react-bootstrap'
import HomeCard from '../HomeCard'
import FeaturesCards from '../FeaturesCards'


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
    )}, [dispatch])
    

        return (
            <>
            <main className='py-4'>
                <Container>
                
                {lHomes.map(home => (
                <FeaturesCards home={home}/>
                ))}
                <br /><br />
                <Container>
                    <h3 className='navHome' style={{textAlign: "center"}}>START PLANNING YOUR NEXT ADVENTURE</h3>
                </Container>
                <br /><br />
                <Row>
                {lHomes.map(home => (
                    <Col key={home._id} sm={12} md={12} lg={10} xl={10} >
                        <HomeCard home={home}/>
                    </Col>
                ))}
                </Row>
                
                </Container>
            </main>
            </>
        )
    
}

export default LandingPage
