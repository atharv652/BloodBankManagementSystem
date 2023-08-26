import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Registration from './components/Registration';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
// import CheckAvailabilityUI from './components/reciever';
import Donor from './components/Donor';
import { useSelector } from 'react-redux';
import Logout from './components/Logout';
import Admin from './components/admin';
import AddUser from './components/AddUser';
import EditStock from './components/EditStock';
import Admin2 from './components/admin2';
import AddCamp from './components/AddCamp';
import EditCamp from './components/EditCamp';
import Buy from './components/Buy';
import BuyWindow from './components/BuyWindow';
import ConfirmApp from './components/ConfirmApp';
import Payments from './components/Payments';

function App() {

  const mystate = useSelector((state)=>state.logged);




  return (
    <div className="App">
      <div style={{display: mystate?"none" : "block"}}>
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
            </li> */}
          </ul>
        </div>
      </nav>
      </div>
      <Routes>
        <Route path='home' element={<Home/>} /> 
        <Route path='registration' element={<Registration/>} />
        <Route path='login' element={<Login/>} />
        {/* <Route path='receiver' element={<CheckAvailabilityUI/>}/> */}
        <Route path='donor' element={<Donor/>}/>
        <Route path='logout' element={<Logout/>}/>
        <Route path='admin' element={<Admin/>}/>
        <Route path='adduser'element={<AddUser/>}/>
        <Route exact path='editstock/:id' element={<EditStock/>}/>
        <Route path='admin2' element={<Admin2/>}/>
        <Route path='addcamp' element={<AddCamp/>}/>
        <Route exact path='editcamp/:id' element={<EditCamp/>}/>
        <Route path='buy'element={<Buy/>}/>
        <Route path='buywindow/:id' element={<BuyWindow/>}/>
        <Route path='confirmapp/:id' element={<ConfirmApp/>}/>
        <Route path='payments' element={<Payments/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
