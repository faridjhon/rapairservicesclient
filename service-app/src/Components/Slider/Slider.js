import React from 'react';
import images from '../../Images/about-block.jpg';

const Slider = () => {
    return (
        <div>
            <div className="row mt-5 align-middle ml-5 mr-5">
                <div className="col-md-6">
                    <h1>WE'RE REPAIRED</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Quidem nihil voluptatum quia molestias numquam vel beatae dicta modi eos facere? Dolorem aspernatur,
                         voluptatibus, ipsam neque corporis obcaecati repudiandae dignissimos tempore.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque necessitatibus facere debitis eum 
                        explicabo ea consequatur.
                        </p>

                </div>
                <div className="col-md-6">
                    <img src={images} alt="" class="img-fluid"/>
                </div>
            </div>
        </div>
    );
};

export default Slider;