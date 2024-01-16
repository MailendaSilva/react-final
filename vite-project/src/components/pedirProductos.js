import data from "../data/productos.json";


 const pedirProductos = () => {
    return new Promise ((resolve,reject) => {
        resolve(data)
    })
}
export default pedirProductos;

export const pedirItems = (id) => {
    return new Promise ((resolve,reject) => {
        const item = data.find ((el)=> el.id === id)

        if(item){
        resolve(item)}
        else {
            reject ({
                error: "no hay productos"
            })
        }
    })
}
