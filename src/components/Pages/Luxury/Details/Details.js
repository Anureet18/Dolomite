import { useState, useEffect } from 'react';
import React from 'react'
import Button from 'react-bootstrap/Button';
import './Details.css'
import { Row, Col } from 'react-bootstrap';
import Date from '../../../Home/HeroSection/Date/Date';
import Form from 'react-bootstrap/Form';
import * as formik from 'formik';
import * as yup from 'yup';
import Similar from '../Similar/Similar';

function Details() {
    const { Formik } = formik;

    const schema = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email('Invalid email').required('Required'),
    });

    return (
        <>
            <div className="wrap">
                <div>
                    <div className="name">
                        <div className="tabia"><h1>Tabià La Stua</h1></div>
                        <div className="share" ><Button className='button' variant="dark"><img src="/images/share.png" alt="" /> Share</Button></div>
                    </div>
                </div>
                <div className="rating">
                    <img src="/images/rating.png" alt="" />
                    <p>4.5 (1200 Reviews)</p>
                </div>
                <div className="location-tabia"><img src="/images/loc.png" alt="" /> <p>Lorem ipsum road, Tantruim-2322, Arabba</p></div>

                <Row className='view'>
                    <Col sm={12} lg={8} md={12} xs={12} >
                        <div className="overview">
                            <div className="details-tabia">
                                <h2>Overview</h2>
                                <p>Featuring free WiFi throughout the property, Lakeside Motel Waterfront  offers accommodations in Lakes Entrance, 19 mi from Bairnsdale. Free private parking is available on site.
                                    <br /> <br />
                                    Each room at this motel is air conditioned and comes with a flat-screen TV. You will find a kettle, toaster and a microwave in the room. Each room is fitted with a private bathroom. Guests have access to barbecue facilities and a lovely large lawn area. Metung is 6.8 mi from Lakeside Motel Waterfront, while Paynesville is 14 mi from the property.
                                    <br /> <br />
                                    Couples in particular like the location – they rated it 9.2 for a two-person trip.
                                </p>
                            </div>
                            <hr />
                            <div className="facilites">
                                <h6>Top Facilites</h6>
                                <Row className='over m-0'>
                                    <Col>
                                        <ul>
                                            <li><img src="/images/wifi.png" alt="" /> Free wifi</li>
                                            <li><img src="/images/air.png" alt="" /> Air Conditioning</li>
                                            <li><img src="/images/parking.png" alt="" /> Parking available</li>
                                        </ul>
                                    </Col>
                                    <Col>
                                        <ul>
                                            <li><img src="/images/business.png" alt="" /> Business Services</li>
                                            <li><img src="/images/pool.png" alt="" /> Swimming pool</li>
                                            <li><img src="/images/like.png" alt="" /> Top rated in area</li>
                                        </ul>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>

                    <Col sm={12}  lg={4} md={6} xs={12}>
                        <div className="form-control">
                        <h2 className='req-head'>Request</h2>
                        <Formik
                        
                            validationSchema={schema}
                            onSubmit={console.log}
                            initialValues={{
                                name: '',
                                email: ''
                            }}
                        >
                            {({ handleSubmit, handleChange, values, errors }) => (
                                <Form noValidate onSubmit={handleSubmit}>

                                    <Form.Group
                                        controlId="validationFormik103" className="position-relative" >
                                        <Form.Control
                                            type="text"
                                            placeholder="First Name"
                                            name="name"
                                            value={values.name}
                                            onChange={handleChange}
                                            isInvalid={!!errors.name}
                                        />
                                        <Form.Control.Feedback type="invalid" tooltip>
                                            <p>Please enter your name</p>
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group
                                        controlId="validationFormik103" className="position-relative" >
                                        <Form.Control
                                            type="email"
                                            placeholder="E-mail"
                                            name="email"
                                            value={values.email}
                                            onChange={handleChange}
                                            isInvalid={!!errors.email}
                                        />
                                        <Form.Control.Feedback type="invalid" tooltip>
                                            <p>{errors.email}</p>
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Control as="textarea"
                                            rows={6}
                                            placeholder='Your message' />
                                    </Form.Group>

                                    <div><Button className='send-btn' type="submit">Send</Button></div>
                                </Form>
                            )}
                        </Formik>
                        </div>
                    </Col>



                </Row>

                <div className='luxury-check container'><Date /></div>

                <Similar/>
            </div >

        </>
    )
}

export default Details
