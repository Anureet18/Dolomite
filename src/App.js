import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Accomodation from './components/Pages/Accomodation/Accomodation';
import Homepage from './components/Pages/Homepage/Homepage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './components/Pages/Contact/Contact';
import Luxury from './components/Pages/Luxury/Luxury';
// import SignIn from './components/Pages/Shop/SignIn'; 
// import ReadMore from './components/Pages/Shop/ReadMore';
// import SearchBar from './components/Pages/Shop/SearchBar';
import Employees from './components/Pages/Shop/Employees';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Homepage/> </>} />
        <Route path="/accomodation" element={<><Header/> <Accomodation /> <Footer /></>} />
        <Route path="/contact" element={<> <Contact/> </>} />
        <Route path="/luxury" element={<> <Luxury/> </>} />
        <Route path="/shop" element={<> <Employees/>  </>} /> 
        {/* <Route path="/shop" element={<> <Header/> <SearchBar/>  <SignIn/>  </>} /> */}
        {/* <Route path="/ReadMore/:id" element={<><ReadMore/>  </>} /> */}

      </Routes>
    </BrowserRouter>

  )
}

export default App

