import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Doctors from "./doctors/Doctors";
import "./SimpleSlider.modules.css";

function SimpleSlider() {
  var settings = {
    dots: true,
    arrow :false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className="card">
        <h2 className="service">TESTIMONIAL</h2>
        <h1 className="excellent">
          Patients Say About
          <br />
          Our Services
        </h1>
      </div>

      <Slider {...settings}>
        <Doctors
          image={
            "../images/crousal1.jpg"
          }
          description={
            "Doctors are often praised for their kindness, understanding, and gentle approach, making patients feel safe."
          }
          patient={"John Smith "}
          profession={"Student"}
        />

        <Doctors
          image={
            "../images/crousal2.jpg"
          }
          description={
            "Patients value doctors who demonstrate deep knowledge and skill, especially in complex procedures."
          }
          patient={"Michael Johnson"}
          profession={"Developer"}
        />

        <Doctors
          image={
            "../images/crousal3.jpg"
          }
          description={
            "Testimonials frequently mention doctors patiently answering questions, explaining diagnoses, and detailing treatment plans, reducing anxiety."
          }
          patient={"Emily Clark"}
          profession={"Teacher"}
        />
      </Slider>
    </div>
  );
}

export default SimpleSlider;
