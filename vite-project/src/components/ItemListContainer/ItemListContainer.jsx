import { useState, useEffect } from 'react'
import pedirProductos from '../pedirProductos';
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const categoria = useParams().categoria;

    //componente pedirProductos para modularizar

    //para que se llame una sola vez y no genere loop
    useEffect(() => {
        pedirProductos()
        .then((res) => {
            if (categoria) {
                setProductos(res.filter((prod) => prod.categoria === categoria));
            }else
            setProductos(res);
        })
    }, [categoria])
    
  return (
    //modularizo y dejo la logica en itemlist 
    <div>
         
         <ItemList productos={productos}/>
    </div>

)
    }
    export default ItemListContainer;
