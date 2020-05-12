import React from 'react';


function NavigationBar() {
        return (
          <>
            <nav className="navbar">
                <button>&#9776;</button>
                <a href="" className="nav-logo">LOGO</a>

                <div className="right-menu">
                    <p>| User Name</p>
                </div>
                
            </nav>
          </>
        )
}



export default NavigationBar;
