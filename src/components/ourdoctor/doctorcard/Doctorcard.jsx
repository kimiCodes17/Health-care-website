import React from 'react'
import "./Doctorcard.modules.css";

export default function Doctorcard({ images , name , about , sec }) {
  return (
    <div id="d-card">
      <img src={images} alt="" />

      <div id="d-heading">
        <h1>{name}</h1>
        <br />
        <h3>{sec}</h3>
        <br />
        <p> {about}</p>



        <hr />

        <div id="d-icon">
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-linkedin"></i>
        </div>
      </div>
    </div>
  )
}
