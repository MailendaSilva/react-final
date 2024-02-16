import React from 'react';

const Item = ({ productos }) => {
  console.log(`/imagenes/${productos.imagen}`);
  return (
    
    <div>
      <h2 className = "titulos">{productos.nombre}</h2>
      
      <img src={`${productos.imagen}`} alt="ERROR IMG" height="200" width="200" />
      <p>${productos.precio}</p>
      <a className="verMas" href={`/item/${productos.id}`}>Ver más</a>
    </div>
  );
}

export default Item;