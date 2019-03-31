import React, { useRef } from 'react';

const Form = (props) => {
  const rElement = useRef();
  const gElement = useRef();
  const bElement = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.onSubmit) props.onSubmit(inputRefs.map(([_, ref]) => Number(ref.current.value)));
  };

  return (
    <form onSubmit={ handleSubmit }>
      <input ref={ rElement } type="number" name="r" />
      <input ref={ gElement } type="number" name="g" />
      <input ref={ bElement } type="number" name="b" />
      <button>Add Swatch!</button>
    </form>
  );
};

export default Form;
