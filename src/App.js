// Libraries
import React, { useState } from 'react';
import Select from 'react-select';

// Styling
import './App.css';

// Components
import Header from './components/Header'
import options from './options'
import Snippet from './components/Snippet'

function App() {
  const [cCodeString, setCCodeString] = useState("")
  const [armCodeString, setArmCodeString] = useState("")

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
        options={options}
      />
      <div className="snippets">
        <Snippet
          code={cCodeString}
          lauguage='c'
        />
        <Snippet
          code={armCodeString}
          lauguage='asmarm'
        />
      </div>

    </div>
  );
}

export default App;
