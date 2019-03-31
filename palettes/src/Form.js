import React, { useRef } from 'react';

const Form = (props) => {
  const inputRefs = [
    ['r', useRef()],
    ['g', useRef()],
    ['b', useRef()],
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.onSubmit) props.onSubmit(inputRefs.map(([_, ref]) => Number(ref.current.value)));
  };

  const inputElements = inputRefs.map(([name, ref], i) => <input key={i} ref={ ref } type="number" placeholder={ `Add a value for ${name}`} />)

  return (
    <form onSubmit={ handleSubmit }>
      { inputElements }
      <button>Add Swatch!</button>
    </form>
  );
};

export default Form;
