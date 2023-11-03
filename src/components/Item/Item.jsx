import React from 'react'
import './Item.css'
import { FaPeriscope } from "react-icons/fa";

const Item =(props) =>{
  return (
    <div className='item'>
      <img src={props.image} alt='' className='img-fluid' />
      <h3 className='price'>{props.price}</h3>
      <div className="details">
        <div className="highlighted-name">
            {props.name}
        </div>
        <div className="location">
           <FaPeriscope/> {props.location}
        </div>
      </div>
    </div>
  )
}

export default Item
