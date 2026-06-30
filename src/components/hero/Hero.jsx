// src/components/Hero.jsx
import React from "react";
import "./Hero.modules.css";
// import { Outlet } from "react-router";
import About from "../about/About";
import Facilities from "../facilities/Facilities";
import Appointment from "../appointment/Appointment";
import SimpleSlider from "../medicalpackages/SimpleSlider";
import Ourdoctor from "../ourdoctor/Ourdoctor";
import Healthcare from "../healthcare/Healthcare";
import SimpleSlider1 from "../testimonial/SimpleSlider1";
import Blog from "../blog/Blog";

export default function Hero() {
  return (
    <div>
      <section className="hero d-flex justify-content-center flex-column">
        <div className="text-center">
          <h1 className="h1">WELCOME TO MEDINOVA</h1>

          <h2 className="fw-bold display-4 text-light">
            Best Healthcare Solution <br /> In Your City
          </h2>

          <div id="hero_btn">
            <button
              className="btn btn-outline-light mt-3 border border-2 border-light"
              id="appoint_btn"
            >
              Appointment
            </button>

            <button className="btn btn-light mt-3">Find Doctor</button>
          </div>
        </div>
      </section>
      {/* <div> */}
        {/* <About />
        <Facilities />
        <Appointment />
        <SimpleSlider />
        <Ourdoctor />
        <Healthcare />
        <SimpleSlider1 />
        <Blog /> */}
      {/* </div> */}
    </div>
  );
}
