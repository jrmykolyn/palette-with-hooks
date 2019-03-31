// Include standard Hooks as part of this project
import React, { useState, useEffect, useContext } from 'react';
import Palette from './Palette';

const App = () => {
  const initialSwatches = [
    [255, 0, 0],
    [0, 255, 0],
    [0, 0, 255],
  ];

  const [swatches, setSwatches] = useState(initialSwatches);

  return (
    <Palette swatches={ swatches } />
  );
};

export default App;
