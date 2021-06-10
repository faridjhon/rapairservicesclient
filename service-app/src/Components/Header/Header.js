import React from 'react';
import Blog from '../Blog/Blog';
import Contactus from '../Contactus/Contactus';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Navbar from '../Navbar/Navbar';
import Ourteam from '../Ourteam/Ourteam';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';
import Testimonials from '../Testimonial/Testimonials';

const Header = () => {
    return (
        <div >
           <Navbar></Navbar>
           <Slider></Slider> 
           <Blog></Blog>
           <Services></Services>
           <Testimonials></Testimonials>
           <Ourteam></Ourteam>
           <Contactus></Contactus>
           <Footer></Footer>
        </div>
    );
};

export default Header;