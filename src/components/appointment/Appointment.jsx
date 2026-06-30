import React from 'react'
// import './Appointment.css';
import "./Appointment.modules.css";

function Appointment() {
  return (
    <div className='main'>
      <div className='component'>
        <h1 className='appoint-head'>APPOINTMENT</h1>
        <h2 className='appoint-sub-head'>Make An Appointment <br />For Your Family</h2>
        <p className='appoint-para'> We provide trusted and comprehensive healthcare services for you and your family,
          supported by experienced doctors and modern medical facilities. Our goal is to make
          quality healthcare easily accessible through a simple and hassle-free appointment
          booking process. Choose the right department, select your preferred doctor, and
          schedule your visit at a convenient time without long waiting hours.
          <br /><br />
          From routine checkups to specialized treatments, we are committed to delivering
          personalized care with compassion, safety, and medical excellence. Your health and
          comfort remain our top priority at every step of your journey with us.</p>

        <div className='button'>
          <button className='doctor'>Find Doctor</button>     <button className='read' >Read More</button>
        </div>
      </div>

      <div className="application-form">
        <h3 className='application-form-heading'>Book An Appointment</h3>
        <form>
          <div className="row-form">
            <select className='dd'>
              <option value="">Choose Department</option>
              <option value="">Orthopedics</option>
              <option value="">Cardiology</option>
              <option value="">Neurology</option>
            </select>
            <select className='dd'>
              <option value="">Select Doctor</option>
              <option value="">Dr. Priya Saxena</option>
              <option value="">Dr. Amit Sharma</option>
              <option value="">Dr. Suresh Gupta</option>
            </select>
          </div>

          <div className='row-form'>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
          </div>

          <div className='row-form'>
            <input type="date" placeholder="Date"></input>
            <input type="time" placeholder="Time" />
          </div>

          <button type="submit">Make An Appointment</button>
        </form>
      </div>
    </div>
  )
}

export default Appointment;
