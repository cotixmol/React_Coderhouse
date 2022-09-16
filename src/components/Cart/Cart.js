import "./Cart.css"
import { useContext } from "react"
import { cartContext } from "../../context/cartContext"

export const Cart = () =>{
    const {products, deleteProduct} = useContext(cartContext)

    return(
        <div className="contenedor_itemcart">
            {
                products.map(item=>(
                    <div className="elemento_itemcart">
                        <div><img className="imagen_itemcart" alt={item.title} src={item.pictureUrl}></img></div>
                        <p className="titulo_itemcart">{item.title}</p>
                        <p className="cantidad_itemcart">{item.quantity}</p>
                        <p className="precio_itemcart">{item.price}</p>
                        <button className="boton_itemcart" onClick={()=>deleteProduct(item.id)}> X </button>
                    </div>
                ))
            }

        </div>
    )
}