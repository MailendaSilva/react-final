import React, { useState } from 'react';


const ItemCount = ({contador, aumentar, decrementar, agregarCarrito}) => {
  

  return (
    <div>
      <div>
        <button onClick={aumentar} className="verMas"> + </button>
        <p>Cantidad: {contador}</p>
        <button onClick={decrementar} className="verMas"> - </button>
      
      </div>
        <button onClick={agregarCarrito} className="verMas">Agregar al carrito</button>
    </div>
    
  );

};

export default ItemCount;