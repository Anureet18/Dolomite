import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Accomodation from './components/Pages/Accomodation/Accomodation';
import Homepage from './components/Pages/Homepage/Homepage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './components/Pages/Contact/Contact';
import Luxury from './components/Pages/Luxury/Luxury';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Homepage/> </>} />
        <Route path="/accomodation" element={<><Header/> <Accomodation /> <Footer /></>} />
        <Route path="/contact" element={<> <Contact/> </>} />
        <Route path="/luxury" element={<> <Luxury/> </>} />

      </Routes>
    </BrowserRouter>

  )
}

export default App

