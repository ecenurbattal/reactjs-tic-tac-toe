import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import StartContext from './contexts/StartContext';
import Router from './Router';

function App() {
  const [status, setStatus] = useState(false);

  return (
    <StartContext.Provider
      value={{
        status,
        setStatus,
      }}
    >
      <Header/>
      <Router/>
    </StartContext.Provider>
  );
}

export default App;
