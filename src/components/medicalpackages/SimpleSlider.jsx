import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Card from "./medicalcard/Card";
import "./medicalcard/Card.modules.css";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,          // 🔥 autoplay ON
    autoplaySpeed: 2000,
    speed: 900,           // slide move speed (smooth)

    cssEase: "ease-in-out", // 🔥 smooth animation


    // pauseOnHover: true,      // hover pe ruk jaaye
    // pauseOnFocus: false,

    responsive:
      [
        {
          breakpoint: 1000, // tablet
          settings: { slidesToShow: 2, }
        },

        {
          breakpoint: 576, // mobile
          settings: { slidesToShow: 1, }
        }
      ]

  };
  return (


    <section className="pricing-section">
      <div id="medical_packages_heading">
        <h1>MEDICAL PACKAGES</h1>
        <h2 className="display-3 fw-bold mt-4">Awesome Medical <br/>Programs</h2>
      </div>
      
      <div className="curve-bg"></div>

      <div className="slider-wrapper">

      <Slider {...settings}>
        <Card
         images="../images/one.jpg" 
         title1={"Heart Treatment"}
         title2={"Modern Cath Lab"}
         title3={"High Success Rate"}
         title4={"Post Surgery Care"}
         />

        <Card
         images="../images/two.jpg" 
         title1={"Emergency Care"}
         title2={"Instant Ambulance Support"}
         title3={"Advanced ICU Facility"}
         title4={"Fast Medical Response"}
         />

        <Card
         images="../images/three.jpg" 
         title1={"Dental Care"}
         title2={"Painless Treatment"}
         title3={"Certified Dentists"}
         title4={"Affordable Packages"}
         />

        <Card
         images="../images/four.jpg" 
         title1={"General Health"}
         title2={"Routine Health Checkups"}
         title3={"Qualified Doctors"}
         title4={"Personalized Care"}
         />

        <Card
         images="../images/five.jpg" 
         title1={"Orthopedic Care"}
         title2={"Bone & Joint Specialists"}
         title3={"Physiotherapy Support"}
         title4={"Modern Surgery Methods"}
         />

        <Card
         images="../images/six.jpg" 
         title1={"Child Care"}
         title2={"Special Pediatric Doctors"}
         title3={"Vaccination Programs"}
         title4={"Friendly Environment"}
         />
      </Slider>

    </div>
    </section >


  );
}