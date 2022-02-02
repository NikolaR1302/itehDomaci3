import React from 'react';
import {AiOutlineCar} from "react-icons/ai";
import Button from './Button';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";


function Car({car, dodajAuto, inFavorites, ukloniAuto}) {

  

  return (
    <div className='card'>
   {/* <div className={inFavorites ===0?"card":"card-cart"}> */}
    <img className = "card-img" src={car.slika} alt="Neka slika"></img>
    <div className="card-body">
      <h3 className="card-title">{car.naziv}</h3>
      <p className="card-text"> Cena : {car.cena}</p>
    </div>
    {inFavorites===0 ? <div className='btn2'>
      <Button className="btn" text="Dodaj auto" onClick={()=>dodajAuto(car.naziv, car.id)}></Button>
      </div>
      :
      <>
       <p className="card-text"> Godiste: {car.godiste}</p>
       <p className="card-text"> Gorivo : {car.gorivo}</p>
       <p className="card-text"> Kubikaza : {car.kubikaza}</p>

       <div className='btn2'>
         <Link to="/favorites">
         <Button className="btn" text="Ukloni auto" onClick={()=>ukloniAuto(car.id)}></Button>
         </Link>
         
        </div>
       
      </>
      }
    
    
  </div>
  
  );
}

export default Car;

