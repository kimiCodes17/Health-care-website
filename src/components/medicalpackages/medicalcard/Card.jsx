import React from 'react'
import "./Card.modules.css";


export default function Card({images , title1 , title2 , title3 , title4}) { 
    return (
        <div>
            <div id="medial_box">
                <img src={images} alt="" height={200} width={200}/>

                <div id="medical-heading">
                    <h3 align="center" className='fw-bold fs-3 text-dark' id='h1'>{title1}</h3><br />
                    <h3 align="center" id='h2'>{title2}</h3><br />
                    <h3 align="center" id='h3'>{title3}</h3><br />
                    <h3 align="center" id='h4'>{title4}</h3><br />
                </div>

                <button className='btn btn-outline-info p-3 w-50 rounded rounded-5' id="apply_btn">Apply Now</button>

            </div>
        </div>
    )
}
