import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Experiences from './components/Experiences';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cancel from './pages/Cancel';
import Store from './pages/Store';
import Success from './pages/Success';
import CartProvider from './CartContext';

import './App.css';

function Home() {
  return (
    <CartProvider>
        <Navbar />
        <About />
        <Experiences />
        <Services />
        <Store />
        <Contact />
    </CartProvider>
        
  )
}


function App() {
  return (
      <Router>
        <div className="App">
            <Routes>
              <Route path="success" element={<Success />} />
              <Route path="cancel" element={<Cancel />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          <Footer />
        </div>
      </Router>
          
  );
}

export default App;
