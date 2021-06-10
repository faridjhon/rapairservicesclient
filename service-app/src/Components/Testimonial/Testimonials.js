import React from 'react';
import desktop from '../../Images/desktop.png';
import laptop from '../../Images/laptop.png';

import tablet from '../../Images/tablet.png';
import TestimonialItem from './TestimonialItem';


const testimonialData = [
  {
    name: "Marin",
    img: desktop,
    description:
      "Lorem ipsum dolor sit amet consectetur",
  },
  {
    name: "Sanmartin",
    img: laptop,
    description:
      "Lorem ipsum dolor sit amet consectetur",
  },
  {
    name: "Final dot",
    img: tablet,
    description:
      "Lorem ipsum dolor sit amet consectetur",
  }
  
];

const Testimonials = () => {
    // const [testimonialData, setTestimonialData] = useState([]);


    // useEffect(()=>{
    //   fetch('https://lit-plateau-42557.herokuapp.com/review')
    //   .then(res=>res.json())
    //   .then(data=>setTestimonialData(data))
    // }, [])


    return (
        <section className="text-center container mt-5">
          <div>
            <h5>REVIEWS</h5>
            <p>TESTIMONIAL</p>
            <p>=========</p>
            <div className="row">
              {
              testimonialData.map(tt => <TestimonialItem tt={tt} ></TestimonialItem>)
              }
              
            </div>
          </div>
        </section>
    );
  };


export default Testimonials;