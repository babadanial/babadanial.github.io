import React from 'react';
import Router from './components/Router/'
import './App.css';
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    // using React.Fragment is the same as wrapping your code in an overarching div
    //  since functions must return a single component
    <React.Fragment>
      <Navbar/>
      <Router/>
    </React.Fragment>
  );
}

export default App;
