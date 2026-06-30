import React from 'react'
import "./Healthcare.modules.css";

export default function Healthcare() {
  return (
    <div id='find-doctor'>
        <h2 className='text-light'>FIND A DOCTOR</h2>
        
        <h1 className='display-3 mt-4'>Find A Healthcare</h1> 
        <h1 className='display-3'> Professionals</h1>

        <p> Your health matters. Discover experienced doctors and healthcare specialists 
            based on your needs, location, and preferences — all in one simple and 
             user-friendly platform.</p>


        <div id="inp">
          <div id="drop">

              <select id='select' className='p-3'>
                <option value="">Department</option>
                <option value="">Orthopedics</option>
                <option value="">Cardiology</option>
                <option value="">Neurology</option>
              </select>

              <input type="text" placeholder='Keyword' />

              <button className='w-25'>Search</button>
              
            </div>
        </div>

        


    </div>
  )
}
