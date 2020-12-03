import React, { useState } from 'react'
import '../Rezi.css'
import { Container, Button, Row, Col } from 'react-bootstrap'
import { DateRangePicker } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { useSelector, useDispatch } from 'react-redux'

const Rezi = () => {

    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }

    // handleClick = () => {
        
    // }

    return (
      <Container>
        <Row>
            <Col>
                <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
            </Col>
        </Row>

        <Row>
            <Col>
            <h5 className='guestTab'>
            Number of Guests<i class="fas fa-user-friends"></i>
            <input min={0} defaultValue={2} type='number' className='guestInput'/>
            </h5>
            </Col>
        
            <Col>
                <Button size='sm' >
                    Confirm
                </Button>
            </Col>
        </Row>
      </Container>
    )
  }
  export default Rezi