import React from 'react';
import Car from './Car';

const Favorites = ({cars, ukloniAuto}) => {
  return <div className='all-products'>
      {/* <h3>Omiljeni automobili</h3> */}
      {cars.map((c)=>(
        <Car car={c} key={c.id} inFavorites={1} ukloniAuto={ukloniAuto}></Car>))}
  </div>;
};

export default Favorites;
