//Importo la imagen del carrito del proyecto y le asigno la variable Carrito.
import Carrito from "./Carrito.jpeg"
//Importo la hoja de estilos del componente CartWidget.
import "./CartWidget.css"
//Importo las funciones de React.
import { useContext } from "react"
//Importo el cartContext.
import { cartContext } from "../../context/cartContext"

//Creo el componente cartWidget
const CartWidget = () => {
    //Tomo la prop valor del contexto, la cual genera el numero vecino a la imagen del carrito.
    const {getTotalProducts,products} = useContext(cartContext)

    //Renderizo la imagen del carrito junto al numero que corresponda al valor usando la funcion get Total Products. Hicimos un renderin condicional para que si no hay nada en products el carrito no aparece.
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