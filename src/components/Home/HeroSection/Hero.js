import React from "react";
import './Hero.css';
import Button from 'react-bootstrap/Button';
import { FaLongArrowAltRight } from "react-icons/fa";
import Date from "./Date/Date";

function Hero() {

    return (
        <>
            <div className='hero-container'>
                <h1>Dolomites Dream</h1>
                <h2>Your Home In Dolomites</h2>
                <div className='hero-btns'>
                    <Button variant="light" className='hero-btn'>Explore Now <img src="/images/arrowblack.png" alt="" /> </Button>{' '}
                </div>
            </div>
           
            <div className="text-container">
            <div className="edit container"><Date/></div>
                <h1>“We offer you our best accommodations so that you can <br /> build your best memories here”</h1>
                <h2>This is the reason that drives us to improve ourselves every <br /> day, so that our area is not just any place to get away from <br />the routine but becomes your favorite place.</h2>
            </div >
        </>
    )
}

export default Hero
