import logo from './logo.svg';
import './App.css';
import { Home } from './Home';
import { Departments } from './Departments';
import { Employees } from './Employees';
import { BrowserRouter, Route, Routes, NavLink} from 'react-router-dom';
import React  from 'react';
  //Switch es remplazado por Routes

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h3 className='d-flex justify-content-center m-3'>
        React JS FrontEnd
      </h3>
      <nav className='navbar navbar-expand-sm bg-light navbar-dark'>
        <ul className='navbar-nav'>
          <li className='nav-item- m-1'>
            <NavLink className="btn btn-light btn-outline-primary" to="/home">
              Home
            </NavLink>
          </li>
          <li className='nav-item- m-1'>
            <NavLink className="btn btn-light btn-outline-primary" to="/departments">
              Departments
            </NavLink>
          </li>
          <li className='nav-item- m-1'>
            <NavLink className="btn btn-light btn-outline-primary" to="/employees">
              Employees
            </NavLink>
          </li>
          
        </ul>
      </nav>

      <Routes>
        <Route path='/home'Component={Home}/>
        <Route path='/departments'Component={Departments}/>
        <Route path='/employees'Component={Employees}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
