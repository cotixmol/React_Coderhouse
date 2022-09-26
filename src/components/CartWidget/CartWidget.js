//Importaciones
//Importo la imagen del carrito del proyecto y le asigno la variable Carrito.
import Carrito from "./Carrito.jpeg"
//Importo la hoja de estilos del componente CartWidget.
import "./CartWidget.css"
//Importo las funciones de React.
import { useContext } from "react"
//Importo el cartContext.
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