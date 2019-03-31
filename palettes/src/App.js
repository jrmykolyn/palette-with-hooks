// Include standard Hooks as part of this project
import React, { useState, useEffect, useContext } from 'react';
import Swatch from './Swatch';

// Component: a single colour Palette column
const Palette = () => {
  // Render
  return (
    <ul className="palette">
      <Swatch red={255} green={0} blue={0} />
      <Swatch red={0} green={255} blue={0} />
      <Swatch red={0} green={0} blue={255} />
    </ul>
  );
};

export default Palette;
