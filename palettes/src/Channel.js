import React from 'react';

// Component: controls a single Channel of each swatch (R, G or B)
const Channel = (props) => {
  // Create a local variable from our props
  const {rgb} = props;

  // Ensure channel is within 0 and 255, then callback to update if changed
  const updateRgb = (channel) => {
    if (channel <= 255 && channel >= 0) props.handleOnChange(channel);
  }

  // Render
  return (
    <div className="channel">
      <button type="button" className="btn up" onClick={() => updateRgb(rgb + 1)}>+</button>
      <input type="text" className="txt" value={rgb} onChange={({target}) => updateRgb(Number(target.value))} />
      <button type="button" className="btn down" onClick={() => updateRgb(rgb - 1)}>-</button>
    </div>
  );
};

export default Channel;
