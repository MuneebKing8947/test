import React from 'react';
import { Link } from 'react-router-dom'; 
import { Menubar } from 'primereact/menubar';
import logo from '../Assets/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const Header = () => {
  const items = [
    { label: <Link to="/">Home</Link> }, 
    { label: <Link to="/find-a-doctor">Find a doctor</Link> },
    { label: <Link to="/apps">Apps</Link> },
    { label: <Link to="/testimonials">Testimonials</Link> },
    { label: <Link to="/about-us">About us</Link> }
  ];

  return (
    <>
    <div className='container-fluid mt-4 header'>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6 col-md-4">
            <img src={logo} alt="Logo" className="logo" />
          </div>
          <div className="col-6 col-md-8">
            <Menubar model={items} className="custom-menubar mt-4" />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Header;
