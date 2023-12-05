import React from 'react'
import './main.css'
import data from '../../assets/data'
import Item from '../Item/Item'
import { Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

const Main = () => {
    return (
        <>
        <div className="homepage-outer">
            <div className='content'>
                <h1 className='title'>Highlighted Accommodation In The Dolomites</h1>
                <div className="heading">
                    <p>The best exclusive offers for your holiday in the Dolomites</p>
                    <Button variant="light" className='all-button'>See all</Button>{' '}
                </div>
            </div>

            <div>
            <Row className='m-0'>
                {data.map((item, i) => {
                    return (
                        <Col className='main-item' lg={4}  md={4}  xs={12}>
                            <Item key={i} id={item.id} name={item.name} image={item.image} location={item.location} price={item.price} />
                        </Col>
                    )
                })}
            </Row>
        </div >  
        </div> 
        </>
    )
}


export default Main
