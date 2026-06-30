import React from 'react'
import "./Blog.modules.css";
import Blogcard from './blogcard/Blogcard';

export default function Blog() {
  return (
    <div id='blog_box'>
        <h2>BLOG POST</h2>
        
        <h1 className='display-3 fw-bold'>Our Latest Medical <br /> Blog Posts</h1>


        <div id="blog-card">
            <Blogcard images={"../images/blog1.jpg"} name={"Tips for Maintaining a Healthy Heart in Daily Life"} about={"A healthy heart is the key to a long and active life. Regular exercise, abalanced diet, stress management, and routine health checkups can greatly reduce the risk of heart-related diseases."}/>
            <Blogcard images={"../images/blog2.jpg"} name={" Why Regular Health Checkups Are Important"} about={"Regular medical checkups help in early detection of diseases and preventserious health complications. Timely diagnosis ensures better treatment and long-term health benefits for you and your family."}/>
            <Blogcard images={"../images/blog3.jpg"} name={"How to Boost Your Immunity Naturally"} about={"Building a strong immune system is essential for fighting infections.Healthy food habits, proper sleep, hydration, and regular exercise play an important role in improving immunity naturally."}/>

        </div>
    </div>
  )
}
