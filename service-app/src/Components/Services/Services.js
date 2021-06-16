import React, { useEffect, useState } from 'react';
import ServicesItem from './ServicesItem';

// import desktop from '../../Images/desktop.png';
// import laptop from '../../Images/laptop.png';

// import tablet from '../../Images/tablet.png';


// const servicesData =[
//     {
//         name: 'DESKTOP REPAIR',
//         img: desktop,
//         text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit." 
//     },
//     {
//         name: 'LAPTOP REPAIR',
//         img: laptop,
//         text:''
//     },
//     {
//         name: 'TABLET REPAIR',
//         img: tablet,
//         text:''
//     }
// ]


const Services = () => {

    const [servicesData,setServicesData] =useState([]);

    useEffect((servicesData) =>{
        fetch("http://localhost:5000/services")
        .then(res => res.json())
        .then(data => setServicesData(data))
      }, []) 



    return (
        <section className="text-center container mt-5">
      <div>
        <h5>OUR SERVICE</h5>
        <p>Services We Provide</p>
        <p>=========</p>
      <div className="row">
        {
          servicesData.map(ss => <ServicesItem ss ={ss} ></ServicesItem>)
        }
      </div>
    </div>
    </section>
    );
};

export default Services;