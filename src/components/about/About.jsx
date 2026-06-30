// src/components/About.jsx
import React from "react";
// import "./About.css";
import "./About.modules.css";
import Healthcare from "../healthcare/Healthcare";
import Ourdoctor from "../ourdoctor/Ourdoctor";



export default function About() {
  return (
    <section id="about">
      <div id="about_flex">
        <div id="about_img">
          <img src="./images/scope.jpg" alt="a" />
        </div>
        <div id="about_us" className="p-3">
          <h2>ABOUT US</h2>
          
          <h1 className="display-5 fw-bold">
            Best Medical Care For Yourself <br /> and Your Family
          </h1>
          <p>
            Miracles Medix Cradle, the best delivery hospital in lucknow, features
            modern infrastructure and a team of skilled specialists for a safe
            childbirth experience. Our services encompass prenatal care, baby
            delivery, and postnatal assistance. Our "Miracles Medix delivery
            package" offers discounted lab tests, imaging studies, expert
            consultations, baby delivery, and unique 'wow services'. Prioritizing
            the health and happiness of both mother and newborn, we are the
            trusted choice for exceptional maternity care.
          </p>

          <div id="about_icon">
            <i className="fas fa-user-md" id="about-icon">
              <h2 className="text-dark mt-3">Qualified</h2>
              <h2 id="icon_h2">Doctor</h2>
            </i>
            <i className="fa-solid fa-bed-pulse" id="about-icon">
              <h2 className="text-dark mt-3">Emergency</h2>
              <h2 id="icon_h2">Services</h2>
            </i>
            <i className="fa-solid fa-microscope" id="about-icon">
              <h2 className="text-dark mt-3">Accurate</h2>
              <h2 id="icon_h2">Testing</h2>
            </i>
            <i className="fa-solid fa-truck-medical" id="about-icon">
              <h2 className="text-dark mt-3">Free</h2>
              <h2 id="icon_h2">Ambulance</h2>
            </i>
          </div>
        </div>
        
      </div>
      {/* <Healthcare/> */}
      {/* <Ourdoctor/> */}
    </section>
  )
}

