//Importaciones
//Importo la hoja de estilos de CartContainer
import "./CartContainer.css"
//Importo el componente a usar como hijo
import { Cart } from "../Cart/Cart"

export const CartContainer = () =>{

    return(
        <div className="cart">
            <Cart></Cart>
        </div>
    )
}