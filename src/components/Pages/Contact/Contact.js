import React from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import './Contact.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Contact = () => {
    return (
        <>
            <Header />
            <div className='contact'>
                <h1>KEEP IN TOUCH</h1>
                <p>We are at your disposal for any questions about our services, properties <br />and much more. Don't miss the opportunity to discover the Dolomites!</p>
            </div>
            <Row className='call'>
                <Col lg={6} md={12} xs={12} >
                    <div className='contact-us'>
                        <h1><span className='icon'><img src='./images/phone.png' alt=''/></span>Call us</h1>
                        <hr />
                        <p>We will be happy to provide you with all the information you need to spend your next holidays in the Dolomites.</p>
                        <div className='number'>+39 329 037 9401</div>
                    </div>
                    <div className='contact-us'>
                        <h1><span className='icon'><img src='./images/mail.png' alt=''/></span>Send us an email</h1>
                        <hr />
                        <p>By sending us an email at <span className='book'>booking@dolomitesdream.com</span> you can obtain all the useful information to best organize your stay.</p>
                    </div>
                    <div className='contact-us'>
                        <h1><span className='icon'><img src='./images/thumb.png' alt=''/></span>Follow us on social media</h1>
                        <hr />
                        <p>You can find us on Facebook and Instagram where we publish the latest news, proposals and the most beautiful photos from our area.</p>
                    </div>
                </Col>
                <Col  lg={6} md={6} xs={12} className='phone'><img src='./images/call.png' alt='' /></Col>
                </Row >
                <Footer />
            </>
            )
}

            export default Contact
