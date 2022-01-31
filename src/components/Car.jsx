import React from 'react';
import {AiOutlineCar} from "react-icons/ai";
import Button from './Button';


function Car({car, dodajAuto}) {

  

  return (
  <div className='card'>
    <img className = "card-img" src={car.slika} alt="Neka slika"></img>
    <div className="card-body">
      <h3 className="card-title">{car.naziv}</h3>
      <p className="card-text">{car.cena}</p>
    </div>
    <div className='btn2'>
      
      <Button className="btn" text="Dodaj auto" onClick={()=>dodajAuto(car.naziv)}></Button>
      </div>
    
  </div>
  
  );
}

export default Car;

