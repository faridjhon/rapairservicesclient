import React from 'react';


import images3 from '../../Images/farid.jpg';
import images4 from '../../Images/zahid.jpg';
import images5 from '../../Images/hafiz.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee ,faDesktop  } from '@fortawesome/free-solid-svg-icons';


const Ourteam = () => {
    return (
        <div>
            <h5 className="text-center mt-5">OUR TEAM</h5>
            <p className="text-center">=========</p>
            <div className="row mt-5 align-middle ml-5 mr-5">
            
                <div className="col-md-4 border ">
                    
                    <img src={images3} alt="" class="img-fluid"/>
                    <h5>Eng.Farid Uddin </h5>
                    <p>Repairer</p>
                    
                </div>
                <div className="col-md-4 border ">
                    <img src={images4} alt="" class="img-fluid"/>
                    <h5>Elena Akter</h5>
                    <p>Service Manager</p>
                    
                </div>
                <div className="col-md-4 border ">
                    <img src={images5} alt="" class="img-fluid"/>
                    <h5>Eng.Hafiz ur Rahman</h5>
                    <p>Technical Support</p>
                    
                </div>
            </div>
            <div>
            
        </div>
        <div className="row mt-5 align-middle ml-5 mr-5">
        <div className="col-md-3 border ">
        <FontAwesomeIcon icon={faDesktop} />
        
                    <h5>5500</h5>
                    <h6>BROKEN SCREEN</h6>
                    
                </div>
                <div className="col-md-3 border ">
               
                <FontAwesomeIcon icon={faDesktop} />
                
                    <h5>15000</h5>
                    <h6>REPLACEMENT BATTERY</h6>
                    
                </div>
                <div className="col-md-3 border ">
                <FontAwesomeIcon icon={faDesktop} />
                    <h5>1500</h5>
                    <h6>WORKING HACKINTOSH</h6>
                    
                </div>
                <div className="col-md-3 border ">
                <FontAwesomeIcon icon={faDesktop} />
                
                    <h5>50000</h5>
                    <h6>HAPPY CLIENT</h6>
                    
                </div>
                </div>
            </div>
                   
                        
                   
    );
};

export default Ourteam;