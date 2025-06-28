import React from 'react';
import {Routes, Route} from 'react-router';
import HomePage from './pages/HomePage.jsx';
import PracticePage from './pages/PracticePage.jsx'


import './App.css';


function App() {


  return (
    <Routes>
      <Route path ="/" element = {<HomePage />}  />
      <Route path ="/PracticePage" element = {<PracticePage />}  />
    </Routes>
  )
}

export default App
