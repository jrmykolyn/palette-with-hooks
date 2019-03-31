// Include standard Hooks as part of this project
import React, { useState, useEffect, useContext } from 'react';
import Palette from './Palette';

const App = () => {
  const swatches = [
    [255, 0, 0],
    [0, 255, 0],
    [0, 0, 255],
  ];

  return (
    <Palette swatches={ swatches } />
  );
};

export default App;
