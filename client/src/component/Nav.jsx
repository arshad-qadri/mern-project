import React from 'react';
import '../css/Nav.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='navbar-inner'>
          <div className='brand'>
            <div className='circle'>
              <div className='circle-inner'></div>
            </div>
            <NavLink exact to='/'>
              Ar<span>shad</span>
            </NavLink>
          </div>
          <ul>
            <li>
              <NavLink to='/' exact activeClassName='active_class'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/about' exact activeClassName='active_class'>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to='/contact' exact activeClassName='active_class'>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink exact activeClassName='active_class' to='/login'>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink exact activeClassName='active_class' to='signup'>
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
