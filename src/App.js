import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


import './App.css';

import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
    </BrowserRouter>
  )
}

export default App;
