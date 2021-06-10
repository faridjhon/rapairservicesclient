import React from 'react';

const Contactus = () => {
    return (
                
        <div>
            <h5 className="text-center mt-5">CONTACT US</h5>
            <p className="text-center">=========</p>
            <div className="row mt-5 align-middle ml-5 mr-5">
            
                <div className="col-md-6 border ">
                    
                    <h5>OUR INFO</h5>
                    <p>We will be glad to any cooperation, including the creation of a 
                        franchise. Fill in the form and we shall discuss this in more detail.</p>
                        <ul>
                            <li>
                            Email: example@example.com
                            </li>
                            <li>
                            Skype: Example
                            </li>
                            <li>
                            Main Address: Nikolaeva 12, Novosibirsk
                            </li>
                        </ul>

                </div>
                
                <div className="col-md-6 border ">
                    <img src="" alt="" class="img-fluid"/>
                    
                    <label for="exampleInputEmail1">Your Name :</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Name">
                            </input>
                    <label for="exampleInputEmail1">Email address :</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                            </input>
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            <label for="exampleFormControlTextarea1">Write your Advise</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        <br></br>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    
                    </div>
                    </div>
                    </div>
                   
                        
                   
                
            
               
       
    );
};

export default Contactus;