import React from 'react';
import logo from './logo.svg';
import './App.css';
import { getEnumValues } from '@wbt/core/dist/modules/TestModule/services/TestService';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{getEnumValues().a}</p>
      </header>
    </div>
  );
}

export default App;
