import React from 'react'

const About = () => {
    
    return (
        <div className="about">
         <div className="container">  
         <div className="common">
                  <h1 className="mainHeader">
                  About Me
                  </h1>
                   <p className="mainContent">
                   Lorem Ipsum is simply dummy text of the printing and typesetting 
                   industry. Lorem Ipsum standard dummy text.
                   </p>
                   <div className="commonBorder"></div>
                </div> 
                <div className="row h-650 alignCenter">
                    <div className="col-6">
                        <div className="about__img">
                            <img src="/images/me-01-alt.png" alt="" />
                        </div>
                    </div>
                    <div className="col-6">
                       <div className="about__info">
                           <h1>Hi There</h1>
                           <div className="about__info-1">
                           In id nulla magna. Nullam posuere fermentum mattis. Nunc id dui at sapien 
                           faucibus fermentum ut vel diam. Nullam tempus, nunc id efficitur sagittis, urna 
                           est ultricies eros, ac porta sem turpis

                           </div>
                           <div className="about__info-2">
                           nunc id efficitur sagittis, urna est ultricies eros, ac porta sem 
                           turpis porta sem turpis quis leo. Nulla in feugiat elit
                           </div>
                           <div className="info__contacts">
                               <div className="col-6">
                                   <strong>Name:</strong>
                                   <p>Jonathan Doe</p>
                               </div>
                               <div className="col-6">
                                   <strong>Email:</strong>
                                   <p>example@domain.com</p>
                               </div>
                               <div className="col-6">
                                   <strong>Phone:</strong>
                                   <p>+1 023 454 345</p>
                               </div>
                               <div className="col-6">
                                   <strong>LinkedIn:</strong>
                                   <p>Jonathan_123</p>
                               </div>
                           </div>
                       </div>
                    </div>
                </div>
          </div>   
        </div>
    )
}

export default About
