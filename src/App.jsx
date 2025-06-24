import React from 'react';
import {Routes, Route} from 'react-router';
import HomePage from './pages/HomePage.jsx';
import PracticePage from './pages/PracticePage.jsx'
import Portfolio from './pages/Portfolio.jsx';

import './App.css';


function App() {


  return (
    <Routes>
      <Route path ="/" element = {<HomePage />}  />
      <Route path ="/PracticePage" element = {<PracticePage />}  />
      <Route path ="/Portfolio" element = {<Portfolio />}  />


    </Routes>
  )
}

export default App
