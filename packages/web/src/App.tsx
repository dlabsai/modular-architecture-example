import React from 'react';
import logo from './logo.svg';
import './App.css';
import { get3 } from 'core/index';


function App() {
  const number3 = get3();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{number3}</p>
      </header>
    </div>
  );
}

export default App;
