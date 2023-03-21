import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import reportWebVitals from './reportWebVitals';
import ItemListsContainer from './components/ItemListsContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nosotros from './components/Nosotros';
import ItemDetailContainer from './components/ItemDetailContainer';
import Landing from './components/Landing';
import { initializeApp } from "firebase/app";
import CartProvider from './Context/CartContext';
import Cart from './components/Cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const firebaseConfig = {
  apiKey: "AIzaSyA1jOtLBh0bmjHXc-NNXr2IzuffmK1rAA0",
  authDomain: "todo-vehiculos.firebaseapp.com",
  projectId: "todo-vehiculos",
  storageBucket: "todo-vehiculos.appspot.com",
  messagingSenderId: "1046205581394",
  appId: "1:1046205581394:web:b9e19856992dbaf602778b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Landing greeting="Vehiculos Disponibles"/>} />
        <Route exact path="/about" element={<Nosotros />} />
        <Route exact path="/:id" element={<ItemDetailContainer/>} />
        <Route exact path="/category/:id" element={<ItemListsContainer />} />
        <Route exact path="/carrito" element={<Cart />}/>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
);

reportWebVitals();

