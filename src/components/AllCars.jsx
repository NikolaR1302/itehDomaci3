import React from 'react';
import Car from "./Car";


const AllCars = ({cars,dodajAuto}) => {



  return <div className='all-products'>
    
      {cars.map((c)=>(
         <Car car={c} key={c.id} dodajAuto={dodajAuto} inFavorites={0}/>
      ))}
      
      </div>
}
  

export default AllCars;
