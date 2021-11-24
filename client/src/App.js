import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/login/Login';
import Register from './components/login/Register';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Experiences from './components/Resume';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
      <Router>
        <div className="App">
          <Header />  
          <Navbar />
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
                <About />
                <Experiences />
                <Services />
                <Contact />
              </Route>
            </Switch>
          <Footer />
        </div>
      </Router>
          
  );
}

export default App;
