import React from 'react'

function Nav() {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar__container"></div>
                  <ul clasName="navbar__left">
                    <div className="navbar__left-logo">
                       <img src="./images/logo2.png" alt="logo" />
                    </div>
                   </ul>
                 <ul className="navbar__right">
                  <li>
                      <a href="">Home</a>
                  </li>
                  <li>
                      <a href="">Services</a>
                  </li> 
                  <li>
                      <a href="">About</a>
                  </li> 
                  <li>
                      <a href="">Skill</a>
                  </li> 
                  <li>
                      <a href="">Protfolio</a>
                  </li> 
                  <li>
                      <a href="">Blog</a>
                  </li> 
                  <li>
                      <a href="">Contact</a>
                  </li>  
               </ul>
            </div> 
        </nav>
    )
}

export default Nav
