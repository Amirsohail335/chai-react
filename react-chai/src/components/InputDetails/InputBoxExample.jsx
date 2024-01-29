import React, { useState } from 'react';

const InputBoxExample = () => {
  const [inputs, setInputs] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Access the input values from the 'inputs' state
    console.log(inputs.input1, inputs.input2, inputs.input3, inputs.input4);
    // You can perform further operations with the input values here
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="input1" 
          value={inputs.input1} 
          onChange={handleInputChange} 
          placeholder="Input 1" 
        />
        <input 
          type="text" 
          name="input2" 
          value={inputs.input2} 
          onChange={handleInputChange} 
          placeholder="Input 2" 
        />
        <input 
          type="text" 
          name="input3" 
          value={inputs.input3} 
          onChange={handleInputChange} 
          placeholder="Input 3" 
        />
        <input 
          type="text" 
          name="input4" 
          value={inputs.input4} 
          onChange={handleInputChange} 
          placeholder="Input 4" 
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InputBoxExample;
