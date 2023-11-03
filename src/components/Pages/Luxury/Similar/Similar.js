import React from 'react'
import Item from '../../../Item/Item'
import data from '../../../../assets/tabiadata'
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './Similar.css'

const Similar = () => {
  return (
    <div>
      <div className='similar-content'>
        <div><h2 className='title'>SIMILAR PROPERTIES</h2></div>
        <div>
          <Button variant="light" className='similar-button'>See all</Button>{' '}
        </div>
      </div>
      <Row className='m-0'>
        {data.map((item, i) => {
          return (
            <Col lg={4} sm={4} >
              <Item key={i} id={item.id} name={item.name} image={item.image} location={item.location} price={item.price} />
            </Col>
          )
        })}
      </Row>
    </div>
  )
}

export default Similar


