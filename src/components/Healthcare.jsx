import React from 'react';
import logo1 from '../Assets/illustration.png';
import { Button } from 'primereact/button';

const Healthcare = () => {
  return (
    <div className="container d-flex justify-content-between head1">
      <div className="row">
        <div className="col-md-6">
          <div className=" head2 mt-5">
            <h1>Virtual healthcare<br/> for you</h1>
            <p>Trafalgar provides progressive, and affordable<br/> healthcare, accessible on mobile and online<br/> for everyone</p>
            <Button className="btn btn-primary">Consult today</Button>
          </div>
        </div>
        <div className="col-md-6">
          <img className="img-fluid " src={logo1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Healthcare;
