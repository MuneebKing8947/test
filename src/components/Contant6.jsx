import React from 'react';
import logo1 from '../Assets/logo1.png';
import { Button } from 'primereact/button';

const Contant6 = () => {
  return (
    <div className="container d-flex justify-content-around head1">
       <div className="row ">
       <div className="col-md-6">
          <img className="img-fluid img1" src={logo1} alt="" />
        </div>
     
        <div className="col-md-6">
          <div className=" head3">
            <h1>Leading healthcare<br/> providers</h1>
            <hr className='hr1' />
            <p>Trafalgar provides progressive, and affordable<br/> healthcare, accessible on mobile and online for<br/> everyone. To us, it's not just work. We take pride<br/> in the solutions we deliver</p>
            <Button className=' btn btn-outline-primary justify-content-center'  label="Learn More" />
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Contant6;
