import React from 'react';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <ItemCount/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          //para hacerlo dinamico
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="/productos" element={<ItemDetailContainer/>}/>
          <Route path="/productos/:categoria" element={<ItemListContainer/>}/>
        </Routes>
        
     </BrowserRouter>
    </div>
  );
}

export default App