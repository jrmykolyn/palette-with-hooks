import React, { useRef } from 'react';

const Form = (props) => {
  const inputRefs = [
    ['r', useRef()],
    ['g', useRef()],
    ['b', useRef()],
  ];

  const validateInput = (refs) => {
    // Loop over each reference to ensure that it's value is a number between 0 and 255.
    return refs.every(([_, ref]) => {
      return Number(ref.current.value) >= 0 && Number(ref.current.value) <= 255;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (props.onSubmit) {

      // If the user-supplied input is valid:
      // - Invoke the `onSubmit()` handler with an array containing the input values;
      // - Reset the input fields.
      if (validateInput(inputRefs)) {
        props.onSubmit(inputRefs.map(([_, ref]) => Number(ref.current.value)));
        inputRefs.map(([_, ref]) => ref.current.value = 0);

      // If the user-supplied input is invalid:
      // - Invoke the `onInvalid()` handler.
      } else {
        if (props.onInvalid) props.onInvalid();
      }
    }
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
