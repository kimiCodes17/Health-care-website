import Hero from "../hero/Hero";
import About from "../about/About";
import Facilities from "../facilities/Facilities";
import Appointment from "../appointment/Appointment";
import SimpleSlider from "../medicalpackages/SimpleSlider";
import Ourdoctor from "../ourdoctor/Ourdoctor";
import Healthcare from "../healthcare/Healthcare";
import SimpleSlider1 from "../testimonial/SimpleSlider1";
import Blog from "../blog/Blog";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Facilities />
      <Appointment />
      <SimpleSlider />
      <Ourdoctor />
      <Healthcare />
      <SimpleSlider1 />
      <Blog />
    </>
  );
}
