import React, { useContext, useEffect, useState } from 'react';
import { Card ,Button  } from 'react-bootstrap';

import {Link } from "react-router-dom";
import { userContext, UserOrder } from '../../App';


const ServicesItem = ({ss}) => {

    


const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const [order, setOrder] = useContext(UserOrder)


const handleOrder = (ss) => {
    setOrder(ss);

}


    return (      

            
                <div className="col-md-4">  
                <Card style={{ width: '18rem',backgroundColor: "lightblue" }}>
                    <Card class="bg-dark" />
                        <Card.Body>
                        <Card.Title>{ss.titlename}</Card.Title>
                        <Card.Text>{ss.price}</Card.Text>
                        <Card.Text>{ss.name}</Card.Text>
                        
                        <Link to = "/Book" >  <Button  onClick={() => handleOrder(ss)} variant="primary">Order Now</Button >{' '}</Link>
                
                        </Card.Body>
                    </Card>              
                
                </div>          
            
        
    );
};

export default ServicesItem;