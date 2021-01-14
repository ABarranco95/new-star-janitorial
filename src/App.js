import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


import './App.css';

import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  )
}

export default App;