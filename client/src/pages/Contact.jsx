import React from 'react';
import Nav from '../component/Nav';
import { FaMobileAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { SiGooglemaps } from 'react-icons/si';
import '../css/Contact.css';
import Footer from '../component/Footer';

const Contact = () => {
  return (
    <>
      <Nav />
      <div className='pageWidth contact D-flex-column'>
        <div className='top D-flex-row'>
          <div className='conDetail  D-flex-row'>
            <FaMobileAlt className='conIcon' />
            <div className='ConDesc'>
              <p className='name'>Phone</p>
              <span className='info'>+918007330423</span>
            </div>
          </div>
          <div className='conDetail  D-flex-row'>
            <MdEmail className='conIcon' />
            <div className='ConDesc'>
              <p className='name'>Email</p>
              <span className='info'>arshadqadri321@gmail.com</span>
            </div>
          </div>
          <div className='conDetail  D-flex-row'>
            <SiGooglemaps className='conIcon' />
            <div className='ConDesc'>
              <p className='name'>Address</p>
              <span className='info'>Sangli, Maharashtra</span>
            </div>
          </div>
        </div>
        <div className='middle D-flex-column'>
          <h3>Get in Touch</h3>
          <div className='midConDet '>
            <input type='text' placeholder='Your Name' />
            <input type='email' placeholder='Your Email' />
            <input type='number' placeholder='Your Phone Number' />
          </div>
          <textarea className='msg' placeholder='Message'></textarea>
          <button type='submit' className='conBtn'>
            Send Message
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
