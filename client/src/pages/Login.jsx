import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from '../component/Nav';
import '../css/Login.css';
import img from '../images/computer.svg';
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaUserAlt,
  FaLock,
} from 'react-icons/fa';
import { AiFillGoogleSquare } from 'react-icons/ai';

const Login = () => {
  return (
    <div>
      <Nav />
      <div className='pageWidth D-flex'>
        <div className='login D-flex-row'>
          <div className='left D-flex-column'>
            <img src={img} alt='computer' />
            <NavLink to='/signup'>Create an account</NavLink>
          </div>
          <div className='right D-flex-column'>
            <h2>Sign In</h2>
            <form action='# ' className='D-flex-column'>
              <div className='email'>
                <input type='email' placeholder='Your Email' />
                <FaUserAlt className='user' />
              </div>
              <div className='password'>
                <input type='password' placeholder='Password' />
                <FaLock className='pass' />
              </div>

              <button type='submit'>Submit</button>
            </form>
            <div className='socialIcon D-flex-row'>
              <span>Or login with</span>
              <FaFacebookSquare className='facebook' />
              <FaTwitterSquare className='twitter' />
              {/* <FaGoogle className='google' /> */}
              <AiFillGoogleSquare className='google' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
