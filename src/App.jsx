import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/home/Home";
import AboutUs from "./pages/about/AboutUs";
import Services from "./pages/services/Services";
import Career from "./pages/career/Career";
import Protfolio from "./pages/protfolio/Protfolio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
           <Route path="/career" element={<Career />} />
           <Route path="/portfolio" element={<Protfolio />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
