import './TripStyles.css';

import React from 'react'

export default function TripData(props) {
  return (
    <div className='t-card'>
      <div className='t-image'>
        <img src={props.image} alt= "Trip"/>
        <h4 >{props.heading}</h4>
        <p>{props.text}</p>
      </div>
    </div>
  )
}
