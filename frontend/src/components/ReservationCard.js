import React, { useState, useEffect } from 'react'
import '../Rezi.css'
import { Container, Button, Row, Col } from 'react-bootstrap'
import { DateRangePicker } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { useSelector, useDispatch } from 'react-redux'

const Rezi = () => {

    const dispatch = useDispatch()
    // const [startDate, setStartDate] = useState(new Date())
    // const [endDate, setEndDate] = useState(new Date())
    const home = useSelector(state => state.home)
    const user = useSelector(state => state.user)
    const start = useSelector(state => state.startDate)
    const end = useSelector(state => state.endDate)
    const display = useSelector(state => state.display)



    const selectionRange = {
        startDate: start,
        endDate: end,
        key: 'selection'
    }

    
    function postRes() {
        fetch('http://localhost:3000/api/v1/reservations', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json" 
            },
            body: JSON.stringify({
              reservation: {  
                home_id: home.id,
                user_id: user.id,
                start_date: start,
                end_date: end
              }
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            // dispatch({
            //     type: 'SET_START_DATE',
            //     startDate: new Date()
            // })
            // dispatch({
            //     type: 'SET_END_DATE',
            //     endDate: new Date()
            // })
        })
    }

    const dateChange = (ranges) => {
        dispatch({
            type: 'SET_START_DATE',
            startDate: ranges.selection.startDate
            // key: 'selection'
        })
        dispatch({
            type: 'SET_END_DATE',
            endDate: ranges.selection.endDate
            // key: 'selection'
        })
    }
    
    function handleSelect(ranges) {
        // console.log(ranges.selection.startDate)
        // setStartDate(ranges.selection.startDate)
        // console.log(ranges.selection.endDate)
        // setEndDate(ranges.selection.endDate)
        dateChange(ranges)
    }

    const handleClick = () => {
        dispatch({
            type: 'TOGGLE_DISPLAY',
            display: display
        })
        alert('Happy Traveling- your home has been booked!')
    }

    return (
      <Container>
        { display
        ? (
        <Row>
            <Col>
                <DateRangePicker ranges={[selectionRange]} onChange={ handleSelect } />
            </Col>
        </Row>
        )
        : null }

        <Row>
            <Col>
            <h5 className='guestTab'>
            Number of Guests<i class="fas fa-user-friends"></i>
            <input min={0} defaultValue={2} type='number' className='guestInput'/>
            </h5>
            </Col>
        
            <Col>
                <Button size='sm' onClick={postRes, handleClick} >
                    Confirm
                </Button>
            </Col>
        </Row>
      </Container>
    )
  }
  export default Rezi