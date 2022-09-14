import Carrito from "./Carrito.jpeg"

import "./CartWidget.css"

import { useContext } from "react"
import { cartContext } from "../../context/cartContext"

const CartWidget = () => {

    const {valor} = useContext(cartContext)

    return(
        <>
            <div className="carrito_block">
                <img src={Carrito} alt="Carrito" className="carrito_image"></img>
                <span>{valor}</span>
            </div>
        </>
    )
}

export default CartWidget;