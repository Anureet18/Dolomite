import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";
import './Footer.css'
import Button from 'react-bootstrap/Button';


const Footer = () => {
    return (
        <>
            <div className='question'>
                <div className='ques'>
                    <div><p>Have you already subscribed to the Dolomites <br/>Dream newsletter?</p></div>
                   <div><Button className='subscribe' variant="light">Subscribe</Button>{' '}</div>
                </div>
            </div>
            
            <div className='footer'>
                <Row className='foot m-0'>
                    <Col>
                        <img className='footer-img' src='./images/logo 2.png' alt='' />
                        <h1>Follow Us</h1>
                        <div className='social-icons'><FaFacebookF /> <FaTwitter /> < FaLinkedinIn /> <FaInstagram /></div>
                    </Col>
                    <Col className='footer-column'>
                        <h1>Quick Links</h1>
                        <a href="/">Accommodations</a>
                        <a href="/">Luxury</a>
                        <a href="/">Smart Dolomites</a>
                    </Col>
                    <Col className='footer-column'>
                        <h1>Download</h1>
                        <a href="/">Partner hotels</a>
                        <a href="/">Contacts</a>
                        <a href="/">Shop</a>
                    </Col>
                    <Col  className='footer-column'>
                        <h1>Contact Us</h1>
                        <p>Call us +39 329 037 9401</p>
                        <p>Hours: Mon / Fri 10 - 12 and 14 - 16</p>
                        <a href="/">Booking@dolomitesdream.com</a>
                    </Col>
                </Row>
            </div>
            <div className='terms'>
                <p>DOLOMITES DREAM by Farenzena Lucia & CSAS – via Capoluogo 39, 32023 Rocca Pietore, Italy +39 329 037 9401 | VAT IT01217090255 | Tax code: 01217090255 | <br />info@dolomitesdream.com | Legal Information | Privacy Policy and Cookie PolicyCopyright Dolomites Dream © 2020 | Made by ShinyUp</p>
            </div>
        </>
    )
}

export default Footer
