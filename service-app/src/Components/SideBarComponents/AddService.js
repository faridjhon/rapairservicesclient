
import React, { useState } from 'react';



import Sidebar from '../DashBoard/Sidebar';

const AddService = () => {
    const [info, setInfo] = useState({});
    
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    

    const handleSubmit = () => {
        const formData = new FormData()
        
        formData.append('titlename', info.titlename);
        formData.append('price', info.price);
        formData.append('name', info.name);


        fetch('http://localhost:5000/AddService', {
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
                <h5 className="text-brand">Add Services</h5>
                <form onSubmit={handleSubmit}>
                <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Package Name</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="titlename" placeholder="Package Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Package Price</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="price" placeholder="Package Price" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Diagnostic Type </label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Diagnostic Type" />
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddService;