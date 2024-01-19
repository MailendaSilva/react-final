import React from 'react'
import  Item  from './Item'
import "./ItemList.css";

export const ItemList = ({productos}) => {
  return ( 
    <div className="item-list-container">

    <h1 className= "titulo"> DISPONIBLES </h1>
            {
                //recorro con map y creo un div x cada prod
                productos.length > 0 && 
                productos.map((productos) => {
                    return (
               //me llevo la logica a item para modularizar
                 <div key={productos.id} className="card">
                     <Item productos = {productos}/>
                </div>
                            )
            })
            }

    </div>
  )
}
