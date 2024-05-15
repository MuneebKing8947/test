import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import '../App.css';
import logo2 from '../Assets/Group.png';
import logo3 from '../Assets/Frame.png';
import logo4 from '../Assets/Frame1.png';
import logo5 from '../Assets/Frame2.png';
import logo6 from '../Assets/Frame3.png';
import logo7 from '../Assets/Group1.png';

const Cards = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4 mb-4">
          <Card className="card h-100">
            <img src={logo2} alt="" />
            <h2>Search doctor</h2>
            <p>Choose your doctor from thousands of specialists, general, and trusted hospitals</p>
          </Card>
        </div>
        <div className="col-md-4 mb-4">
          <Card className="card h-100">
            <img src={logo3} alt="" />
            <h2 className='mt-1'>Online pharmacy</h2>
            <p>Buy your medicines with our mobile application with a simple delivery system</p>
          </Card>
        </div>
        <div className="col-md-4 mb-4">
          <Card className="card h-100">
            <img src={logo4} alt="" />
            <h2>Consultation</h2>
            <p>Free consultation with our trusted doctors and get the best recommendations</p>
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 mb-4">
          <Card className="card h-100">
            <img src={logo5} alt="" />
            <h2>Details info</h2>
            <p>Free consultation with our trusted doctors and get the best recommendations</p>
          </Card>
        </div>
        <div className="col-md-4 mb-4">
          <Card className="card h-100">
            <img src={logo6} alt="" />
            <h2 className='mt-4'>Emergency care</h2>
            <p>You can get 24/7 urgent care for yourself or your children and your lovely family</p>
          </Card>
        </div>
        <div className="col-md-4 mb-4">
          <Card className="card h-100">
            <img src={logo7} alt="" />
            <h2>Tracking</h2>
            <p>Track and save your medical history and health data</p>
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <Button className="btn btn-outline-primary" label="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default Cards;
