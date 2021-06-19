
import React, { useState } from 'react';



import Sidebar from '../DashBoard/Sidebar';

const AddReview = () => {
    const [info, setInfo] = useState({});
    
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    

    const handleSubmit = () => {
        const formData = new FormData()
        
        formData.append('comments', info.comments);
        formData.append('name', info.name);
        formData.append('designation', info.designation);


        fetch('http://localhost:5000/AddReview', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5 mt-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Add Review</h5>
                <form onSubmit={handleSubmit}>
                <div className="form-group">
                        <label htmlFor="exampleInputPassword1">comments</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="comments" placeholder="comments" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Customer Name</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Customer Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Designation </label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="designation" placeholder="Designation" />
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddReview;