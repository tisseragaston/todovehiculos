import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import reportWebVitals from './reportWebVitals';
import ItemListsContainer from './components/ItemListsContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nosotros from './components/Nosotros';
import ItemDetailContainer from './components/ItemDetailContainer';
import Landing from './components/Landing';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Landing greeting="Vehiculos"/>} />
        <Route exact path="/about" element={<Nosotros />} />
        <Route exact path="/vehiculo/:id" element={<ItemDetailContainer/>} />
        <Route exact path="category/:id" element={<ItemListsContainer />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

