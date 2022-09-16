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
    const {valor} = useContext(cartContext)

    //Renderizo la imagen del carrito junto al numero que corresponda al valor.
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