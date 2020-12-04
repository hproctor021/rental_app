import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Container } from 'react-bootstrap'
import HomeCard from '../HomeCard'
import BannerPic from '../BannerPic'
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
                 <BannerPic />
                <main className='py-4'>
                    <br /><br />
                
                    <Container className='home-title'>
                        <h3  style={{textAlign: "center"}}>START PLANNING YOUR NEXT ADVENTURE</h3>
                    </Container>
                    <hr />
                    <br /><br />
                    <FeaturesCards />
                    <br /><br /><br />
                    <Container className='home-title'>
                        <h3  style={{textAlign: "center"}}>EXPLORE OUR HOMES</h3>
                    </Container>
                    <hr />
                    <br />

                    <Row>
                    {lHomes.map(home => (
                        <Col key={home._id} sm={14} md={12} lg={11} xl={9} >
                            <HomeCard home={home} />
                        </Col>
                    ))}
                    </Row>  
            </main>
            </>
        )
    
}

export default LandingPage
