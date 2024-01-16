import { useState, useEffect } from 'react'
import pedirProductos from '../pedirProductos';
import { ItemList } from './ItemList';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);

    //componente pedirProductos para modularizar

    //para que se llame una sola vez y no genere loop
    useEffect(() => {
        pedirProductos()
        .then((res) => {
            setProductos(res);
        })
    }, [])
    
  return (
    //modularizo y dejo la logica en itemlist 
    <div>
         
         <ItemList productos={productos}/>
    </div>

)
    }
    export default ItemListContainer;
