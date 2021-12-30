import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './components/login/Login';
import Register from './components/login/Register';
import Navbar from './components/Navbar';
import About from './components/About';
import Experiences from './components/Experiences';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function Home() {
  return (
    <>
      <Navbar />
      <About />
      <Experiences />
      <Services />
      <Contact />
    </>
  )
}


function App() {
  return (
      <Router>
        <div className="App">
          
            <Routes>
              <Route path="/" element={<Register />} />
                
              <Route path="/login" element={<Login />} />
                
              <Route path="/register" element={<Register />} />
                
              <Route path="/home" element={<Home />} />
            </Routes>
          <Footer />
        </div>
      </Router>
          
  );
}

export default App;
