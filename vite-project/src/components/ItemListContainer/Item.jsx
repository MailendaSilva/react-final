import React from 'react';

const Item = ({ productos }) => {
  return (
    <div>
      <h2>{productos.nombre}</h2>
      <img src={`/imagenes/${productos.imagen}`} alt="ERROR IMG" />
      <p>${productos.precio}</p>
      <a className="verMas" href={`/item/${productos.id}`}>Ver más</a>
    </div>
  );
}

export default Item;