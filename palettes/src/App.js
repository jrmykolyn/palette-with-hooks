// Include standard Hooks as part of this project
import React, { useState, useEffect, useContext } from 'react';
import Form from './Form';
import Palette from './Palette';

const App = () => {
  const initialSwatches = [
    [255, 0, 0],
    [0, 255, 0],
    [0, 0, 255],
  ];

  const [swatches, setSwatches] = useState(initialSwatches);

  return (
    <main>
      <Palette swatches={ swatches } />
      <Form />
    </main>
  );
};

export default App;
