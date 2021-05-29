import React from 'react';
import images1 from '../../Images/blog-1.jpg';
import images2 from '../../Images/blog-2.jpg';

const Blog = () => {
    return (
        
        <div>
            <h1 className="text-center mt-5">OUR BLOG</h1>
            <div className="row mt-5 align-middle ml-5 mr-5">
            
                <div className="col-md-6 border border-secondary border-top-0">
                    
                    <img src={images1} alt="" class="img-fluid"/>
                    <h2>The Heading</h2>
                    <p>2 January 2017</p>
                    <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                Magni incidunt est quos earum numquam veritatis maiores voluptate sunt sint asperiores,
                                inventore, iste excepturi sed, quis debitis iure alias. 
                                Quibusdam, cupiditate. ipsum dolor sit amet, consectetur adipisicing elit.
                                Commodi maiores ullam minus accusantium aliquam. Magnam obcaecati 
                                vel ea, molestiae, quas tempore nesciunt doloribus debitis odio corrupti
                                laboriosam sequi nisi illum! ipsum dolor sit amet, consectetur adipisicing elit.
                                    Sed, eum iusto ipsa. Optio, dolore, ipsam adipisci quos dicta, 
                                    temporibus id odit fuga magni porro repellendus sit illum deserunt
                                    eveniet perferendis. ipsum dolor sit amet, consectetur adipisicing elit.
                                    Atque fugiat non, exercitationem saepe beatae, cupiditate nesciunt
                                    eos quidem a nemo, eius labore hic aspernatur.
                                Necessitatibus nulla in quis veniam quas.
                    </p>

                </div>
                <div className="col-md-6 border border-secondary border-top-0">
                    <img src={images2} alt="" class="img-fluid"/>
                    <h2>The Heading</h2>
                    <p>2 January 2017</p>
                    <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                Magni incidunt est quos earum numquam veritatis maiores voluptate sunt sint asperiores,
                                inventore, iste excepturi sed, quis debitis iure alias. 
                                Quibusdam, cupiditate. ipsum dolor sit amet, consectetur adipisicing elit.
                                Commodi maiores ullam minus accusantium aliquam. Magnam obcaecati 
                                vel ea, molestiae, quas tempore nesciunt doloribus debitis odio corrupti
                                laboriosam sequi nisi illum! ipsum dolor sit amet, consectetur adipisicing elit.
                                    Sed, eum iusto ipsa. Optio, dolore, ipsam adipisci quos dicta, 
                                    temporibus id odit fuga magni porro repellendus sit illum deserunt
                                    eveniet perferendis. ipsum dolor sit amet, consectetur adipisicing elit.
                                    Atque fugiat non, exercitationem saepe beatae, cupiditate nesciunt
                                    eos quidem a nemo, eius labore hic aspernatur.
                                Necessitatibus nulla in quis veniam quas.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;