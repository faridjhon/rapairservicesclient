import React from 'react';
import { Link } from 'react-router-dom';
import About from '../About/About';


const Navbar = () => {
    return (
             <div class="sticky-top " >
            <nav class="navbar navbar-expand-lg navbar-dark bg-secondary ">
            <a class="navbar-brand ml-5" href="#">H@Service</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse  " id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto ">
                <li class="nav-item active">
                    <a class="nav-link mr-5" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link mr-5" href="/About">About </a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link mr-5" href="#">Services</a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link mr-5" href="#">Testimonial</a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link mr-5" href="#">Blog </a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link mr-5" href="#">Contact Us </a>
                </li>
                <li class="nav-item ">
                    <Link to="/Login">Login</Link>
                </li>
                
                
                
                
                </ul>
                
            </div>
            </nav>
        </div>
    );
};

export default Navbar;