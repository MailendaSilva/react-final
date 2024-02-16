import React, {  } from 'react';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {  CartProvider } from './components/Context/CartContext';
import CheckOut from './components/CheckOut/CheckOut';
import { Carrito } from './components/Carrito/Carrito';


function App() {

  return (
    <div>
      
      <CartProvider>
        <BrowserRouter>

          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            //para hacerlo dinamico
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route path="/productos" element={<ItemDetailContainer/>}/>
            <Route path="/productos/:categoria" element={<ItemListContainer/>}/>
            <Route path="/carrito" element={<Carrito/>}/>
            <Route path="/checkout" element={<CheckOut/>}/>
          </Routes>
          
         </BrowserRouter>
        </CartProvider>
    
    </div>
  );
}

export default App