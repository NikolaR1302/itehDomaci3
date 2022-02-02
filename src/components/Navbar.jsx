import React from 'react';
import {AiOutlineCar,AiFillCar} from "react-icons/ai";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

function Navbar() {
  return <div className = "navBar">
    <Link to="/">
    Svi automobili
    </Link>
    <hr></hr>
    <Link to="/favorites">Moji automobili</Link>

  </div>;
}

export default Navbar;

