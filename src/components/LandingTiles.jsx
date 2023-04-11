import React from 'react';
import './LandingTiles.css';

import tile1 from '../assets/tile1.jpg';
import tile2 from '../assets/tile2.jpg';
import tile3 from '../assets/tile3.jpg';
import tile4 from '../assets/tile4.jpg';

const LandingTiles = () => {
  return (
    <div className='space-container'>
      <div className="tiles-container">
        <img src={tile1} alt="tile1 desc" className="tile-img" />
        <img src={tile3} alt="tile3 desc" className="tile-img" />
        <img src={tile2} alt="tile2 desc" className="tile-img" />
        <img src={tile4} alt="tile4 desc" className="tile-img" />
      </div>
    </div>
  );
};

export default LandingTiles;
