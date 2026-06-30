import React from 'react'
import "./Ourdoctor.modules.css";
import Doctorcard from './doctorcard/Doctorcard';

export default function Ourdoctor() {
  return (
    <div id='our_doctor'>
        <h2>OUR DOCTORS</h2>
        
        <h1 className='display-3'>Qualified Healthcare <br />Professionals</h1>


        <div id="doctor_card">
            <Doctorcard images={"../images/dname1.jpg"} name={"Dr. Neha Verma"} sec={"Neurology Specialist"} about={"Dr. Neha Verma specializes in neurological disorders and provides comprehensive treatment with a patient-first and evidence-based approach."}/>
            <Doctorcard images={"../images/dname2.jpg"} name={"Dr. Priya Mehta"} sec={"Orthopedic Surgeon"} about={" Dr. Priya Mehta is an experienced orthopedic surgeon known for treating joint, bone, and sports injuries with modern surgical techniques."}/>

        </div>
    </div>
  )
}
