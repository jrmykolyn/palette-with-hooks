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

  const addSwatch = (swatch) => {
    setSwatches((swatches) => [...swatches, swatch]);
  };

  const handleInvalidInput = () => {
    alert('Whoops! Please make sure that all input values are between 0 and 255.');
  };

  return (
    <main>
      <Palette swatches={ swatches } />
      <Form onSubmit={ addSwatch } onInvalid={ handleInvalidInput } />
    </main>
  );
};

export default App;
