import React from 'react';
import  { FaFacebookF, FaTwitter, FaPinterest, FaInstagramSquare, FaPlay } from "react-icons/fa";

const Banner = () => (
    
        <header className="header">
                <div clasName="container">
                        <div className="row">
                                <div className="col-6">
                                 <div className="header__content">
                                         <div className="header__section">
                                         <ul className="header__ul">
                                     <li>
                                             <FaFacebookF />
                                     </li>
                                     <li>
                                             <FaTwitter />
                                     </li>
                                     <li>
                                             <FaPinterest />
                                     </li>
                                     <li>
                                             <FaInstagramSquare />
                                     </li>       
                                     </ul>  
                                     <h1>I am Jonathan Doe</h1>
                                     <p>
                                     i,m Jonathan, professional web developer with long time experience in this field​
                                     </p>  
                                      <div className="header__buttons">
                                              <a href="" className="btn btn-outline">
                                                      My Portfolio
                                                </a>
                                              &nbsp;&nbsp;&nbsp;
                                              <a href="" className="btn btn-smart">
                                              <FaPlay className="play" />
                                                </a>
                                        </div>
                                    </div> 
                                 </div>       
                                </div>
                                <div className="col-6">
                                  <div clasName="banner__img">
                                          <img src="/images/man-01.png" alt="man" />
                                          </div>      
                                </div>
                        </div>
                </div>
        </header>
    
)
    
export default Banner;
