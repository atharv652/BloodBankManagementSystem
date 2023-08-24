import React from 'react';
import { Link, Route, Routes,useLocation } from 'react-router-dom';
// import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Registration from './components/Registration';
import Home from './components/Home';
import Receiver from './components/Reciever';
import Donor from './components/Donor';
import Admin from './components/Admin';
import Contact from './components/Contact';
import AddUser from './components/AddUser'
import EditStock from './components/EditStock';
// import Logout from './components/logout';
import { useSelector } from 'react-redux';
import Buy from './components/Buy';

function App() {

  // const location = useLocation(); // Get the current location

  // // Your selector logic here, replace with actual selector
  // const isLoggedIn = useSelector((state) => state.logged.loggedIn);
  
  // // Conditionally render the "Add Stock" link based on the admin page
  // const renderAddStockLink = location.pathname === '/admin' && isLoggedIn;
  
  

  return (
    
    <div className="App">
      <nav className="navbar navbar-expand-sm bg-light navbar-sm mb-3">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="home" className="nav-link px-3">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="register" className="nav-link px-3">
                Registration
              </Link>
            </li>
            <li className="nav-item">
              <Link to="login" className="nav-link px-3">
                Login
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to="receiver" className="nav-link px-3">
                Check Availability
              </Link>
            </li>
            <li className="nav-item">
              <Link to="donor" className="nav-link px-3">
                Donation Camps
              </Link>
            </li>
            <li className="nav-item">
              <Link to="admin" className="nav-link px-3">
                Admin
              </Link>
            </li> */}
            <li className="nav-item">
              <Link to="contact" className="nav-link px-3">
                Contact Us
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
          <li className='nav-item'>
              <Link to="buy" className='nav-link px-3'>Buy</Link>
            </li>
              <Link className='btn btn-outline-primary' to={"adduser"}>Add Stock</Link>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="register" element={<Registration />} />
        <Route path="login" element={<Login />} />
        <Route path="receiver" element={<Receiver />} />
        <Route path="donor" element={<Donor />} />
        <Route path="admin" element={<Admin />} />
        <Route path="contact" element={<Contact />} />
        <Route path="adduser" element={<AddUser />} />
        <Route exact path="editstock/:id" element={<EditStock/>}/>
        {/* <Route path='logout' element={<Logout/>}/> */}
        <Route path="buy" element={<Buy />} />


      </Routes>
    </div>
  );
}


export default App;
