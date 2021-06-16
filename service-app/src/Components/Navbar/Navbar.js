import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import About from '../About/About';
import Login from '../Login/Login';
// import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../App";
import Dashboard from '../DashBoard/Dashboard';
import { Button, Form, FormControl, Nav, Navbar, Dropdown } from 'react-bootstrap';




const NavBar = () => {

    const [loggedInUser,setLoggedInUser] = useContext(userContext);
    return (
             <div class="sticky-top ">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">GR@Services</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav  className="ms-auto">
                        <Link  className="px-4 text-light text-decoration-none" to="/">Home</Link>
                        <Link className="px-4 text-light text-decoration-none" to="/dashboard">Dashboard</Link>
                        <Link className="px-4 text-light text-decoration-none" to="/about">About us</Link>
                        <Link className="px-4 text-light text-decoration-none" to="/Dashboard">Admin</Link>
                            
                    </Nav>
                    <Form style={{ marginRight: "70px" }} inline>
                        {
                            loggedInUser.email ?
                            
                                <div class="btn-group ">
                                <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            user
                                </button>
                                <ul class="dropdown-menu p-2">
                                <p><strong> name:</strong>  {loggedInUser.name}</p>
                            <p><strong> Email:</strong>  {loggedInUser.email}</p>
                                </ul>
                            </div>
                                :

                                <Link to="/login"><Button variant="outline-info"><Login>login</Login></Button></Link>
                                
                        }

                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;