import { Card, Image, Row, Col, Jumbotron, Button } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'


function BannerPic ({ home }) {


    return (
        <>
            <Jumbotron className='banner' style={{padding: '100px', fixed: 'top'}}fluid>  
                  {/* <div style={{backgroundColor: 'black', color: 'ghostwhite', padding: '2px', position: 'fixed', fixed: 'bottom', opacity: '60%', textAlign: 'center'}} className='navHome'>
                      SONDER | explore more
                  </div> */}
            </Jumbotron>
        </>
    )
}

export default BannerPic;