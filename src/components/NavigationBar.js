import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";
export default function NavigationBar() {

    const mystate = useSelector((state)=>state.logged);

    return (
        <div>
            <div style={{display: mystate.loggedIn ? "none" : "block"}}>
      <nav className='navbar navbar-expand-sm bg-primary mb-3'>
        <div className='container-fluid'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link to="home" className='nav-link px-3'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to="registration" className='nav-link px-3'>Registration</Link>
            </li>
            <li className='nav-item'>
              <Link to="login" className='nav-link px-3'>Login</Link>
            </li>            
             {/* <li className='nav-item'>
              <Link to="logout" className='nav-link px-3'>Logout</Link>
            </li>  */}
          </ul>
        </div>
      </nav>
      </div> 
          
        </div>
    )
}