import React from 'react';

const Footer = () => {
    return (
        <div className="bg-secondary ">
            <div className="row mt-5 align-middle ml-5 mr-5 pt-5  ">
                <div className="col-md-4">
                    <h5>WE'RE REPAIRED</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Quidem nihil voluptatum quia molestias numquam vel beatae dicta modi eos facere? Dolorem aspernatur,
                         voluptatibus, ipsam neque corporis obcaecati repudiandae dignissimos tempore.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque necessitatibus facere debitis eum 
                        explicabo ea consequatur.
                        </p>

                </div>
                <div className="col-md-4">
                    <h5>OUR SERVICE</h5>
                    <p>Apple Products Repair</p>
                    <p>Computer Repair</p>
                    <p>Phone Repair</p>
                    <p>Tablet Repair</p>
                    <p>NoteBook Repair</p>
                    <p>HardWare Update</p>
                </div>
                <div className="col-md-4">
                    <h5>OUR NEWSLETTER</h5>
                    <p>Subscribe to our newsletter to receive news & updates.
                     We promise to not spam you, super promise!</p>                      
                        
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                            </input><small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                             
                        <button type="submit" class="btn btn-primary">Submit</button>
                       </div> 
                
            </div>
            <div className="row  ">
                <div className="col-md-12 ">
                <p className=" text-center" >© 2021 Designed by Farid.</p>
                </div>
                
            </div>
        </div>
        
    );
};

export default Footer;