import { useState, useEffect } from 'react'
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';
import {collection, getDocs, query, where} from "firebase/firestore";
import { db } from '../../firebase/config';


const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const categoria = useParams().categoria;

    //para que se llame una sola vez y no genere loop
    useEffect(() => {
        const productosRef = collection (db,"productos");
        const q = categoria ? query (productosRef, where("categoria","==",categoria)) : productosRef;

        getDocs(q)
        .then((resp) => {
            setProductos(
                resp.docs.map((doc) => {
                    return {...doc.data(), id: doc.id}
                })
            )
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
