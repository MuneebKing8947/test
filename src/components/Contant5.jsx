import React from 'react';
import logo1 from '../Assets/Frame4.png';
import { Button } from 'primereact/button';

const Contant = () => {
  return (
    <div className="container d-flex justify-content-around head1">
      <div className="row">
        <div className="col-md-6">
          <div className=" head2 mt-5">
            <h1>Download our<br/>mobile apps </h1>
            <hr className='hr1' />
            <p>Our dedicated patient engagement app and<br/> web portal allow you to access information<br/> instantaneously (no tedeous form, long calls,<br/> or administrative hassle) and securely</p>
            <Button className='btn btn-outline-primary justify-content-center' label="Download" />
          </div>
        </div>
        <div className="col-md-6">
          <img className="img-fluid " src={logo1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contant;
