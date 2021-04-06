import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import Nav from '../component/Nav';
import '../css/SignUp.css';
import img from '../images/computer-sinup.svg';
import { FaUserAlt, FaPhoneAlt, FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { AiFillPlaySquare } from 'react-icons/ai';
import { BiLockAlt } from 'react-icons/bi';
const SignUp = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    work: '',
    password: '',
    cpassword: '',
  });
  let name, value;
  const handleIbputs = e => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const postData = async e => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;
    const res = await fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });
    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert('invalid');
      console.log('invalid');
    } else {
      window.alert('registration Successfull');
      console.log('registration Successfull');
      history.push('/login');
    }
  };
  return (
    <>
      <Nav />
      <div className='pageWidth D-flex'>
        <div className='signUp D-flex-row'>
          <div className='left '>
            <h2>Sign Up</h2>
            <form method='POST'>
              <div className='name'>
                <input
                  value={user.name}
                  onChange={handleIbputs}
                  type='text'
                  placeholder='Your Name'
                  name='name'
                />
                <FaUserAlt className='nameIcon' />
              </div>
              <div className='email'>
                <input
                  value={user.email}
                  onChange={handleIbputs}
                  type='email'
                  placeholder='Your Email'
                  name='email'
                />
                <MdEmail className='emailIcon' />
              </div>
              <div className='number'>
                <input
                  value={user.phone}
                  onChange={handleIbputs}
                  type='number'
                  placeholder='Mobile Number'
                  name='phone'
                />
                <FaPhoneAlt className='phoneIcon' />
              </div>
              <div className='prof'>
                <input
                  value={user.work}
                  onChange={handleIbputs}
                  type='text'
                  placeholder='Your profession'
                  name='work'
                />
                <AiFillPlaySquare className='profIcon' />
              </div>
              <div className='Spass'>
                <input
                  value={user.password}
                  onChange={handleIbputs}
                  type='password'
                  placeholder='Password'
                  name='password'
                />
                <FaLock className='SpassIcon' />
              </div>
              <div className='cpass'>
                <input
                  value={user.cpassword}
                  onChange={handleIbputs}
                  type='Password'
                  placeholder='Confirm Password'
                  name='cpassword'
                />
                <BiLockAlt className='cpassIcon' />
              </div>
              <button type='submit' onClick={postData}>
                Register
              </button>
            </form>
          </div>
          <div className='right D-flex-column'>
            <img src={img} alt='signup' srcset='' />
            <NavLink to='/login' className='alReg'>
              I am already registered
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
