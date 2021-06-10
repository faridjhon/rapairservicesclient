import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'


const TestimonialItem = ({tt}) => {
    return (
        
        <div className="col-md-4">   
                <Carousel>
                    <Carousel.Item interval={1000}>
                            <img  src={tt.img} />
                            <h6>{tt.name}</h6>
                            <p>{tt.description}</p>
                    
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                            <img  src={tt.img} />
                            <h6>{tt.name}</h6>
                            <p>{tt.description}</p>
                    
                    </Carousel.Item>
                    <Carousel.Item>
                            <img  src={tt.img} />
                            <h6>{tt.name}</h6>
                            <p>{tt.description}</p>
                    
                    </Carousel.Item>
                </Carousel>
        </div>
          
          
                    
                    
    );
};

export default TestimonialItem;