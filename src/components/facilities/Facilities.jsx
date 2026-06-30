import React from "react";
// import { Outlet } from "react-router";
import { FaUserDoctor, FaBedPulse } from "react-icons/fa6";
import { FaStethoscope, FaAmbulance } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import { MdBloodtype } from "react-icons/md";
import "./Facilities.modules.css";


function Facilities() {
  return (
    <div className="facility">
      <div className="head-container">
        <h2 className="head">SERVICES</h2>
        <h1 className="paragraph">
          Excellent Medical
          <br />
          Services
        </h1>
      </div>

      {/* Cards Section */}
      <div className="cards-card">
        <div className="facilities-card">
          <div className="symbol">
            <FaUserDoctor />
          </div>
          <h3>Emergency Care</h3>
          <p>
            24/7 emergency medical services with trained doctors and staff to handle
            critical situations quickly, safely, and effectively.
          </p>
        </div>

        <div className="facilities-card">
          <div className="symbol">
            <FaBedPulse />
          </div>
          <h3>Operation & Surgery</h3>
          <p>
            Advanced surgical procedures performed by experienced surgeons using
            modern equipment and high safety standards.
          </p>
        </div>

        <div className="facilities-card">
          <div className="symbol">
            <FaStethoscope />
          </div>
          <h3>Outdoor Checkup</h3>
          <p>
            Regular outpatient checkups with expert doctors to diagnose health issues
            early and provide timely medical advice.
          </p>
        </div>

        <div className="facilities-card">
          <div className="symbol">
            <FaAmbulance />
          </div>
          <h3>Ambulance Service</h3>
          <p>
            Fast and reliable ambulance services equipped with essential life-support
            facilities for emergency patient transportation.
          </p>
        </div>

        <div className="facilities-card">
          <div className="symbol">
            <GiMedicines />
          </div>
          <h3>Medicine & Pharmacy</h3>
          <p>
            In-house pharmacy providing genuine medicines and healthcare products
            prescribed by certified medical professionals.
          </p>
        </div>

        <div className="facilities-card">
          <div className="symbol">
            <MdBloodtype />
          </div>
          <h3>Blood Testing</h3>
          <p>
            Accurate blood testing and diagnostic services using modern laboratories
            to ensure reliable and timely reports.
          </p>
        </div>
      </div>


    </div>
  );
}

export default Facilities;
