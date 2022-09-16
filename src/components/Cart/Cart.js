//Importo la hoja de estilos del Componente Cart
import "./Cart.css"
//Importo las funciones de React
import { useContext } from "react"
//Importo el cartContext.
import { cartContext } from "../../context/cartContext"

//Genero este componente que uso para mostrar los elementos que estan en el carrito. Esto lo hago mediante el uso de contexto.
export const Cart = () =>{
    // Traigo "products" que es productCartList una variable declarada en el cartContext. 
    // Ademas traigo la funcion deleteProduct que en el renderizado estara asociado a un boton, que para esta función toma como parametro el id del producto que acompaña.
    const {products, deleteProduct} = useContext(cartContext)

    //Renderizo una tarjeta con los detalles del elemento que esta en el carrito. Como cantidad, precio y foto. Ademas creo el boton al que asigno la función deleteProduct asignandole como parametro de funcion el valor id del item en cuestion.
    return(
        <div className="contenedor_itemcart">
            {
                products.map(item=>(
                    <div className="elemento_itemcart">
                        <div><img className="imagen_itemcart" alt={item.title} src={item.pictureUrl}></img></div>
                        <p className="titulo_itemcart">{item.title}</p>
                        <p className="cantidad_itemcart">{item.quantity}</p>
                        <p className="precio_itemcart">{item.price}</p>
                        <button className="boton_itemcart" onClick={()=>deleteProduct(item.id)}> x </button>
                    </div>
                ))
            }

        </div>
    )
}