import "./CartContainer.css"

import { useContext } from "react"
import { cartContext } from "../../context/cartContext"



export const CartContainer = () =>{
    const {products, deleteProduct} = useContext(cartContext)
    
    return(
        <div>
            <p>Cart Container</p>
            <p>Cart Container</p>
            <p>Cart Container</p>

            {
                products.map(item=>(
                    <div>
                        <p>{item.title} {item.quantity}</p>
                        <button onClick={()=>deleteProduct(item.id)}> Eliminar Producto </button>
                    </div>
                ))
            }
        </div>
    )
}