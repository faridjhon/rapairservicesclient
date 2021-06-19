import React from 'react';
import Carousel from 'react-bootstrap/Carousel'


const TestimonialItem = ({tt}) => {
    return (
        
        <div className="col-md-4">   
                <Carousel>
                    <Carousel.Item interval={1000}>
                           <h5>{tt.comments}</h5>
                            <br></br>
                            <h6>{tt.name}</h6>
                            <br></br>
                            <p>{tt.designation}</p>
                    
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <h5>{tt.comments}</h5>
                           <br></br>
                            <h6>{tt.name}</h6>
                            <br></br>
                            <p>{tt.designation}</p>
                    
                    </Carousel.Item>
                    <Carousel.Item>
                            <h5>{tt.comments}</h5>
                           <br></br>
                            <h6>{tt.name}</h6>
                            <br></br>
                            <p>{tt.designation}</p>
                    
                    </Carousel.Item>
                </Carousel>
        </div>
          
          
                    
                    
    );
};

export default TestimonialItem;