import React from 'react';
import Navbar from './components/Navbar'
import Home from './views/Home'
import './App.css';

const App = () => {
  return (
    <React.Fragment>
    <Navbar />
    <Home />
   </React.Fragment>
  );
}

export default App;
