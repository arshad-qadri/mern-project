import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
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
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginUser = async e => {
    e.preventDefault();
    const res = await fetch('/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      window.alert('invalid');
      console.log('invalid');
    } else {
      window.alert('Login Successfull');
      console.log('Login Successfull');
      history.push('/');
    }
  };
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
            <form method='POST' className='D-flex-column'>
              <div className='email'>
                <input
                  type='email'
                  placeholder='Your Email'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <FaUserAlt className='user' />
              </div>
              <div className='password'>
                <input
                  type='password'
                  placeholder='Password'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <FaLock className='pass' />
              </div>

              <button type='submit' onClick={loginUser}>
                Submit
              </button>
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
