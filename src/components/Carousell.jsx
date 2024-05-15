import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo8 from '../Assets/Group 5.png';

const Carousell = () => {
  return (
    <div className='container mt-5'>
      <Carousel interval={3000}>
        <Carousel.Item>
          <div className='king container  text-white p-5 text-center'>
            <h1>What our customers are saying</h1>
            <hr className='hr' />
            <div className='container d-flex justify-content-around'>
              <img src={logo8} alt="" />
              <div className='mt-5'>
                <h5>Edward Newgate</h5>
                <p>Founder Circle</p>
              </div>
              <p className='mt-3'>“Our dedicated patient engagement app and<br/> web portal allow you to access information<br/> instantaneously (no tedious form, long calls,<br/> or administrative hassle) and securely”</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='king1 container  text-white p-5 text-center'>
            <h1>What our customers are saying</h1>
            <hr className='hr' />
            <div className='container d-flex justify-content-around'>
              <img src={logo8} alt="" />
              <div className='mt-5'>
                <h5>Edward Newgate</h5>
                <p>Founder Circle</p>
              </div>
              <p className='mt-3'>“Our dedicated patient engagement app and<br/> web portal allow you to access information<br/> instantaneously (no tedious form, long calls,<br/> or administrative hassle) and securely”</p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carousell;
