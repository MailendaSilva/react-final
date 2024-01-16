import "../ItemListContainer/ItemList.css";

 const ItemDetail = ({item}) => {
  return (
    <div  className="card">
        <h2>{item.nombre}</h2>
        <img src={`/imagenes/${item.imagen}`} alt={item.nombre} />
        <p>${item.precio}</p>
        <p>{item.detalle}</p>
    </div>
  )
}
export default ItemDetail;