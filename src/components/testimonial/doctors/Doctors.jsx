
import React from 'react'
import './Doctors.modules.css'

function Doctors({image, description, patient, profession}) {
  return (
    <div className='testimonial'>
      <img src={image} alt="" height={200} width={200}/>
      <p className='description'>{description}</p>
      <br />
      <p className='patient'>{patient}</p>
      <br />
      <p className='profession'>{profession}</p>
      
    </div>
  )
}

export default Doctors;