import React, { useState } from 'react';
import Channel from './Channel';

// Component: a Colour (swatch) row inside of a palette column
const Swatch = (props) => {
  // State variables: r, g, b
  // When these change, the component will re-render
  const [r, setR] = useState(props.red);
  const [g, setG] = useState(props.green);
  const [b, setB] = useState(props.blue);

  const channels = [
    [r, setR],
    [g, setG],
    [b, setB],
  ];

  // Define a background-color for the swatch
  const myStyles = {
    backgroundColor: `rgb(${r},${g},${b})`
  }

  const channelElements = channels.map(([val, setVal], i) => {
      return <Channel key={i} rgb={val} handleOnChange={setVal}/>
  });

  // Render
  return (
    <li className="colour" style={myStyles}>
      <div>rgb(</div>
        { channelElements }
      <div>);</div>
    </li>
  );
};

export default Swatch;
