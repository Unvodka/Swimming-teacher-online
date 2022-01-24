import React from "react";
import './Navbar.css';
import Header from './Header';


const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <Header />

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#aboutId">About</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#experiencesId">Experiences</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#servicesId">Services</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#contactId">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar

