
import './App.css';
import Car from './components/Car';
import Navbar from './components/Navbar';
import AllCars from './components/AllCars';
import img1 from './components/images/bmw.jpg';
import img2 from './components/images/Audi.jpg';
import img3 from './components/images/mercedes.jpg';
import img4 from './components/images/golf.jpg';
import img5 from './components/images/skoda.jpg';
import {useState} from "react";

function App() {



  const allCars=[
    {
      id:1,
      naziv:"AudiA6",
      cena:"43.000$",
      godiste:2017,
      gorivo:"Dizel",
      Kubikaza:"2200cm3",
      slika:img2
    },
    {
      id:2,
      naziv:"BMW X5",
      cena:"29.000$",
      godiste:2015,
      gorivo:"Dizel",
      Kubikaza:"2988cm3",
      slika:img1
    },
    {
      id:3,
      naziv:"Golf 6",
      cena:"6.000$",
      godiste:2012,
      gorivo:"Benzin",
      Kubikaza:"1988cm3",
      slika:img4
    },
    {
      id:4,
      naziv:"Mercedes E220",
      cena:"31.000$",
      godiste:2017,
      gorivo:"Dizel",
      Kubikaza:"2490cm3",
      slika:img3
    },
    {
      id:5,
      naziv:"Skoda Superb",
      cena:"19.000$",
      godiste:2018,
      gorivo:"Dizel",
      Kubikaza:"2200cm3",
      slika:img5
    },
  ];

  function dodajAuto(naziv){
    console.log("Dodat je auto "+naziv);
  }

  return (
    <div className="App">
      <Navbar></Navbar>
      <AllCars cars={allCars} dodajAuto={dodajAuto}></AllCars>
      
    </div>
    
  );
}

export default App;
