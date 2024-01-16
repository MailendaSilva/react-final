import React, { useState } from 'react';

const ItemCount = () => {
  const [contador, setContador] = useState(1);

  const aumentar = () => {
    console.log("Veces que se hizo clic:", contador); 
    setContador(contador + 1);
  };

  const decrementar = () => {
    console.log("Veces que se hizo clic resta:", contador); 
    if (contador > 0){
    setContador(contador - 1);}
  };

  return (
    <div>
      <button onClick={aumentar}> + </button>
      <p>Contador: {contador}</p>
      <button onClick={decrementar}> - </button>
    </div>
  );

};

export default ItemCount;