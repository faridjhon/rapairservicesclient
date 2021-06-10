import React from 'react';

const ServicesItem = ({ss}) => {
    return (       
            
                <div className="col-md-4">                
                <img src={ss.img} alt="" />
                <br /><br />
                <p>{ss.name}</p>
                <p>{ss.text}</p>
                </div>          
            
        
    );
};

export default ServicesItem;