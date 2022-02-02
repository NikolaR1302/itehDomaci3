
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
import Favorites from './components/Favorites';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import { setSelectionRange } from '@testing-library/user-event/dist/utils';

function App() {


  //const[favCars, setFavCars] = useState([]);
  const [favCars,setFavCars] = useState([]);
  const [allCars, setCars] = useState([
    {
      id:1,
      naziv:"AudiA6",
      cena:"43.000$",
      godiste:2017,
      gorivo:"Dizel",
      kubikaza:"2200cm3",
      slika:img2,
      dodat:0
    },
    {
      id:2,
      naziv:"BMW X5",
      cena:"29.000$",
      godiste:2015,
      gorivo:"Dizel",
      kubikaza:"2988cm3",
      slika:img1,
      dodat:0
    },
    {
      id:3,
      naziv:"Golf 6",
      cena:"6.000$",
      godiste:2012,
      gorivo:"Benzin",
      kubikaza:"1988cm3",
      slika:img4,
      dodat:0
    },
    {
      id:4,
      naziv:"Mercedes E220",
      cena:"31.000$",
      godiste:2017,
      gorivo:"Dizel",
      kubikaza:"2490cm3",
      slika:img3,
      dodat:0
    },
    {
      id:5,
      naziv:"Skoda Superb",
      cena:"19.000$",
      godiste:2018,
      gorivo:"Dizel",
      kubikaza:"2200cm3",
      slika:img5,
      dodat:0
    },
  ]);

  function refreshFavorites() {
    let newProducts = favCars.filter((c) => c.dodat > 0);
    setFavCars(newProducts);
  }

  function dodajAuto(naziv, id){
    console.log("Dodat je auto "+naziv);
    allCars.forEach((c) => {
        if(c.id === id && !favCars.includes(c)) {
          c.dodat++;
          console.log(c);
          favCars.push(c);
          
        }
    });
  }

  function ukloniAuto(id){
    
    favCars.forEach((c) => {
      if(c.id === id) { 
        var index = favCars.indexOf(c);
        
        c.dodat--;
        console.log(c);
        delete favCars[index];
        // favCars.splice(c);
        
        console.log(favCars); 
      }
    });
    refreshFavorites();
  }

  

  return (
    <BrowserRouter className="App">
      <Navbar></Navbar>
      <Routes>

        <Route path="/" element={<AllCars cars={allCars} dodajAuto={dodajAuto}></AllCars>}></Route>
        <Route path="/favorites" element = {<Favorites cars={favCars} ukloniAuto={ukloniAuto}/>}></Route>

      </Routes>
      
      
      
      
    </BrowserRouter>
    
  );
}

export default App;
