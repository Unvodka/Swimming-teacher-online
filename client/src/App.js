import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/login/Login';
import Register from './components/login/Register';
import Navbar from './components/Navbar';
import About from './components/About';
import Experiences from './components/Resume';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import ScrollReveal from 'scrollreveal';


ScrollReveal().reveal('.description p', {
  duration: 2000,
  distance: "600px",
  origin: 'right',
  reset: true,
})

ScrollReveal().reveal('.description h2', {
  duration: 1000,
  distance: "10px",
  reset: true
})

ScrollReveal().reveal('.description h3', {
    duration: 1000,
    distance: "10px",
    reset: true
  })

function App() {
  return (
      <Router>
        <div className="App">
          
            <Switch>
              <Route path="/" exact>
                <Register />
              </Route>
              <Route path="/login" exact>
                <Login />
              </Route>
              <Route path="/register" exact>
                <Register />
              </Route>
              <Route path="/home">
                <Navbar />
                <About />
                <Experiences />
                <Services />
                <Contact />
                <p className="contactP">If you prefer, you can contact me by phone directly (see below) </p>
              </Route>
            </Switch>
          <Footer />
        </div>
      </Router>
          
  );
}

export default App;
