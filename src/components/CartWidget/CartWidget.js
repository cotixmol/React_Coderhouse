import Carrito from "./Carrito.jpeg"

import "./CartWidget.css"

const CartWidget = () => {
    return(
        <>
            <div className="carrito_block">
                <img src={Carrito} alt="Carrito" className="carrito_image"></img>
                <span>0</span>
            </div>
        </>
    )
}

export default CartWidget;