import React, { useContext, useEffect, useState } from 'react';
import { Card ,Button  } from 'react-bootstrap';

import {Link } from "react-router-dom";
import { userContext, UserOrder } from '../../App';


const ServicesItem = ({ss}) => {

    // const [flipped, set] = useState(false)
    // const [isAdmin, setIsAdmin] = useState(false);


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
                        <Card.Title>{ss.a}</Card.Title>
                        <Card.Text>{ss.price}</Card.Text>
                        <Card.Text>{ss.c}</Card.Text>
                        <Card.Text>{ss.d}</Card.Text>
                        <Card.Text>{ss.e}</Card.Text>
                        <Card.Text>{ss.f}</Card.Text>
                        <Link to = "/Book" >  <Button  onClick={() => handleOrder(ss)} variant="primary">Order Now</Button >{' '}</Link>
                
                        </Card.Body>
                    </Card>              
                {/* <img src={ss.img} alt="" />
                <br /><br />
                <p>{ss.name}</p>
                <p>{ss.text}</p>
                {isAdmin ? "/dashboard" :  "/book"} */}

                {/* <Link to = "/Book" >  <button onClick={() => handleOrder(ss)} variant="outline-primary">Order Now</button>{' '}</Link> */}
                </div>          
            
        
    );
};

export default ServicesItem;