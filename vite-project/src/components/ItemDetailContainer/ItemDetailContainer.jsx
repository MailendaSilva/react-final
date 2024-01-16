import { useEffect, useState } from 'react';
import { pedirItems } from '../pedirProductos';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

 const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    //nos devuelve un objeto con los parametros que haya en url
    const { id } = useParams();

    useEffect(() => {
      pedirItems (Number(id))
      .then ((res) => {
        setItem(res)
      })
    }, [id])
    
  return (
    <div>
        {item && <ItemDetail item={item} />}
    </div>
  )
}
export default ItemDetailContainer;