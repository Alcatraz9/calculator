import React from 'react';
import './App.css';
import darkMode from './darkMode';
import Calculator from './Calculator';

const App = () => {


    return (
    <>
      <button onClick={darkMode} className="d-mode"><i class="fa fa-moon-o fa-4x" aria-hidden="true"></i>
</button>
      <Calculator />
    </>
  )}
  

export default App;
