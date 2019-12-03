// Libraries
import React, { useState } from 'react';
import Select from 'react-select';

// Styling
import './App.css';

// Components
import Header from './components/Header'
import Snippets from './components/Snippets'

// Other
import options from './options'

function App() {
  const [cCodeString, setCCodeString] = useState(options[0].value.c)
  const [armCodeString, setArmCodeString] = useState(options[0].value.arm)

  const handleChange = (selectedValue) => {
    setCCodeString(selectedValue.value.c)
    setArmCodeString(selectedValue.value.arm)
  }

  return (
    <div className="App">
      <Header />
      <Select
        className="select"
        onChange={handleChange}
        defaultValue={options[0]}
        options={options}
      />
      <Snippets 
        cCode={cCodeString}
        armCode={armCodeString}
      />
    </div>
  );
}

export default App;
