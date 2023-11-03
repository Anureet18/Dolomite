import React from 'react'
import DatePicker from 'react-datepicker'
import { useState } from "react";
import 'react-datepicker/dist/react-datepicker.css'
import Form from 'react-bootstrap/Form';
import { Container, Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './Date.css'

function Date()  {
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    return (
        <>
            <Container>
                        <Row gx-5 className='enter'>
                            <Col className='date'>
                                <div className='start-date'>
                                    <label>Check In</label>
                                    <DatePicker
                                        selectsStart
                                        selected={startDate}
                                        onChange={date => setStartDate(date)}
                                        startDate={startDate}
                                    />
                                </div>
                            </Col>
                            <Col className='date'>
                                <div className='end-date'>
                                    <label>Check Out</label>
                                    <DatePicker
                                        selectsEnd
                                        selected={endDate}
                                        onChange={date => setEndDate(date)}
                                        endDate={endDate}
                                        startDate={startDate}
                                        minDate={startDate}
                                    />
                                </div>
                            </Col>
                            <Col>
                                <div className='Guest'>
                                    <label>Guest</label>
                                    <Form.Select className='drop'>
                                        <option>Select</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </Form.Select>
                                </div>
                            </Col>
                            <Col>
                                <Button variant="light" className='check-btn'>Check Availability <img src="/images/arrow.png" alt="" /></Button>{' '}
                            </Col>
                        </Row>
                    </Container>
        </>
    )
}

export default Date
