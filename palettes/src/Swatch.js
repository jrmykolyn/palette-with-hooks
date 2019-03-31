import React, { useState } from 'react';
import Channel from './Channel';

// Component: a Colour (swatch) row inside of a palette column
const Swatch = (props) => {
  // State variables: r, g, b
  // When these change, the component will re-render
  const [r, setR] = useState(props.red);
  const [g, setG] = useState(props.green);
  const [b, setB] = useState(props.blue);

  // Define a background-color for the swatch
  const myStyles = {
    backgroundColor: `rgb(${r},${g},${b})`
  }

  // Render
  return (
    <li className="colour" style={myStyles}>
      <div>rgb(</div>
      <Channel rgb={r} handleOnChange={setR}/>
      <Channel rgb={g} handleOnChange={setG} />
      <Channel rgb={b} handleOnChange={setB} />
      <div>);</div>
    </li>
  );
};

export default Swatch;
