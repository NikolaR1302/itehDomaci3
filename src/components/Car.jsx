import React from 'react';
import {AiOutlineCar} from "react-icons/ai";
import img1 from './images/bmw.jpg';

function Car() {
  return (
  <div className='card'>
    <img className = "card-img" src={img1} alt="Neka slika"></img>
    <div className="card-body">
      <h3 className="card-title">Audi A6</h3>
      <p className="card-text">6900$</p>
    </div>
    <div className='btn2'>
      <button className="btn">Dodaj auto</button>
      </div>
    
  </div>
  
  );
}

export default Car;

