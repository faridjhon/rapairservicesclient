import React from 'react';
import Blog from '../Blog/Blog';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Navbar from '../Navbar/Navbar';
import Slider from '../Slider/Slider';

const Header = () => {
    return (
        <div >
           <Navbar></Navbar>
           <Slider></Slider> 
           <Blog></Blog>
           <Footer></Footer>
        </div>
    );
};

export default Header;