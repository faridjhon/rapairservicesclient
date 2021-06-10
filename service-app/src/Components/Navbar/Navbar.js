import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import About from '../About/About';
import Login from '../Login/Login';
// import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../App";




const Navbar = () => {

    const [loggedInUser] = useContext(userContext);
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
                 {/* <li className="nav-item">
                        {loggedInUser.name ? (
                        <Link to="/Login" className="nav-link ms-5">
                            {loggedInUser.name}
                        </Link>
                        ) : (
                        <Link to="/Login" className="nav-link ms-5">
                            Login
                        </Link>
                        )}
                    </li>               */}
                </ul>
                <div>
                <NavLink to='/login'><Login></Login></NavLink>
            </div>
                
            </div>
            
            </nav>
        </div>
    );
};

export default Navbar;