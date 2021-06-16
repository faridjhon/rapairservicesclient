import React from 'react';
import Sidebar from '../DashBoard/Sidebar';



const AddService = () => {
    return (
        <div className="row">
            <div className="col-md-8 bg-primary">
            <Sidebar></Sidebar>

        </div>
        <div className="col-md-4 bg-primary">
            <h2>Services List</h2>

        </div>
        </div>

        
    );
};

export default AddService;