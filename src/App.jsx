import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import { Routes, Route, Router } from "react-router-dom";
import Home from "./components/home/Home";
// import About from "./components/about/About";
import Facilities from "./components/facilities/Facilities";
import Contacts from "./components/contacts/Contacts";
import Ab from "./components/ab/Ab";
import Sevice from "./components/service/Sevice";
// import scroll from "./components/scrolltotop/Scroll";
import Scroll from "./components/scrolltotop/scroll";

function App() {
  return (
    <div className="boss">

     
      <Scroll/>
      <Navbar />
      
      
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<Ab />} />
        <Route path="/facilities" element={<Sevice/>} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;



