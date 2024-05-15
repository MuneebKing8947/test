import React from 'react';
import loog5 from '../Assets/T.png';

const Footer = () => {
  return (
    <div className='logoo container mt-5 mb-5'>
      <div className='row justify-content-around'>
        <div className='logo1 p-5 col-lg-3 col-md-6 col-sm-12 mb-4'>
          <div className='logo2 d-flex '>
            <img src={loog5} alt="" />
            <h6 className='mx-2 mt-1'>Trafalgar</h6>
          </div>
          <p>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
          <p className='pt-5'>©Trafalgar PTY LTD 2020. All rights reserved</p>
        </div>
        <div className='logo3 p-5 col-lg-2 col-md-6 col-sm-12 mb-4'>
          <h6>Company</h6>
          <p>About</p>
          <p>Testimonials</p>
          <p>Find a doctor</p>
          <p>Apps</p>
        </div>
        <div className='logo3 p-5 col-lg-2 col-md-6 col-sm-12 mb-4'>
          <h6>Region</h6>
          <p>Indonesia</p>
          <p>Singapore</p>
          <p>Hongkong</p>
          <p>Canada</p>
        </div>
        <div className='logo3 p-5 col-lg-2 col-md-6 col-sm-12 mb-4'>
          <h6>Help</h6>
          <p>Help center</p>
          <p>Contact support</p>
          <p>Instructions</p>
          <p>How it works</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
