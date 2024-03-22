import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Products from './pages/Products';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs'
import BakedProducts from './pages/BakedProducts';
import RawProducts from './pages/RawProducts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/bakedProducts" element={<BakedProducts />} />
          <Route path="/rawProducts" element={<RawProducts />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
