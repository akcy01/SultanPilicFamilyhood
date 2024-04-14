import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Products from './pages/Products';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs'
import BakedProducts from './pages/BakedProducts';
import RawProducts from './pages/RawProducts';
import Home from './pages/Home';
import AppetizerProducts from './pages/AppetizerProducts';
import { Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';



function App() {

  const [sendDataHomeComponent, setSendDataHomeComponent] = useState(null);

  const handleSendDataToHome = function(data) {
    setSendDataHomeComponent(data);
  };


  return (
    <div className="App">
      <Navbar sendDataToHome={handleSendDataToHome}/>
      <Routes>
        <Route path="/" element={<Home data={sendDataHomeComponent} />} />
        <Route path="/products" element={<Products data={sendDataHomeComponent}/>} />
        <Route path="/aboutUs" element={<AboutUs data={sendDataHomeComponent}/>} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/bakedProducts" element={<BakedProducts />} />
        <Route path="/rawProducts" element={<RawProducts />} />
        <Route path="/appetizerProducts" element={<AppetizerProducts />} />
      </Routes >
      <Footer data={sendDataHomeComponent}/>
    </div>
  );
}

export default App;
