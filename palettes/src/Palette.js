import React, { useState, useEffect, useContext } from 'react';
import Swatch from './Swatch';

// Component: a single colour Palette column
const Palette = () => {
  const swatches = [
    [255, 0, 0],
    [0, 255, 0],
    [0, 0, 255],
  ];

  const swatchElements = swatches.map(([r, g, b], i) => <Swatch key={i} red={r} green={g} blue={b} />);

  // Render
  return (
    <ul className="palette">
      { swatchElements }
    </ul>
  );
};

export default Palette;
