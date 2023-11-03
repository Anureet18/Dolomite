import React from 'react'
import './Accomodation.css'
import Sidebar from './Sidebar/Sidebar'
import data from '../../../assets/data'
import Item from '../../Item/Item'
import { Row, Col } from 'react-bootstrap'
import Pagination from 'react-bootstrap/Pagination';


const Accomodation = () => {
    return (
        <>
            <Row className='accomodation-outer' >
                <Col sm={6} className='top-heading' > 
                    <h1>Accommodation In The Dolomites</h1>
                    <p>Lorem ipsum dolor sit amet consectetur. Suspendisse  consequat pulvinar vel in tincidunt pulvinar adipiscing nisl. Ut faucibus mi cursus sed. Eget fermentum egestas mauris sem pellentesque lorem eget varius euismod. Metus blandit vitae vitae ac.</p>
                </Col>  
                <Col sm={6}><img className='villa' src="/images/top.png" alt='' /> </Col>
            </Row>   

            <img className='map' src="./images/map.jpg" alt='' />
            

            <div className="accomodation">
                <Row>
                    <Col md={3} ><Sidebar /></Col>
                    <Col md={9}>
                        <div className='content'>
                            <h1 className='title'>Highlighted Accommodation In The Dolomites</h1>
                            <div className="heading">
                                <p>The best exclusive offers for your holiday in the Dolomites</p>
                            </div>
                        </div>

                        <div>
                            <Row className='m-0'>
                                {data.map((item, i) => {
                                    return (
                                        <Col lg={6} md={6}  xs={12} >
                                            <Item key={i} id={item.id} name={item.name} image={item.image} location={item.location} price={item.price} />
                                        </Col>
                                    )
                                })}
                            </Row>
                        </div >
                    </Col>
                </Row>
            </div>
        </>

    )
}

export default Accomodation
