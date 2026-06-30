import React from 'react'
import "./Blogcard.modules.css";

export default function Blogcard({ images , name , about }) {
  return (
    <div id='card'>
      <img src={images} alt="" />

      <h3>{name}</h3>
      <p>{about}</p>

      <div id="b-icon">
        <i className="fas fa-user-nurse" id='nurse'></i><h6>John Doe</h6>
        <i className="fas fa-eye" id='eye'></i><h6>12345</h6>
        <i className="far fa-comment" id='comment'></i><h6>123</h6>
      </div>
    </div>
  )
}
