import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Arrivals } from './pages/Arrivals'
import { Departures } from './pages/Departures'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/arrivals" element={<Arrivals/>} />
        <Route path="/departures" element={<Departures/>} />
      </Routes>
    </>
  );
}

export default App;