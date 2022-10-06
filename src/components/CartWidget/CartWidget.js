
import Carrito from "./Carrito.jpeg"

import "./CartWidget.css"

import { useContext } from "react"

import { cartContext } from "../../context/cartContext"

export const CartWidget = () => {

    const {getTotalProducts,products} = useContext(cartContext)

    return(
        <div>
            {
                products.length>0 &&
                <>
                    <div className="carrito_block">
                        <img src={Carrito} alt="Carrito" className="carrito_image"></img>
                        <span>
                            {getTotalProducts()}
                        </span>
                    </div>
                </>
            }
        </div>
    )
}

export default CartWidget;