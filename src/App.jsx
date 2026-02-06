import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/home/Home";
import AboutUs from "./pages/about/AboutUs";
import Services from "./pages/services/Services";
import Career from "./pages/career/Career";
import Portfolio from "./pages/portfolio/Portfolio";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
           <Route path="/career" element={<Career />} />
           <Route path="/portfolio" element={<Portfolio />} />
           <Route path= "/contact" element= {<Contact/>} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
