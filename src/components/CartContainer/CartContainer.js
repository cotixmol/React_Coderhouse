//Importo la hoja de estilos de CartContainer
import "./CartContainer.css"
//Importo el componente a usar como hijo
import { Cart } from "../Cart/Cart"

//El componente simplemente renderiza el hijo. Este nivel extra de componente me es util para general diseños en css.
export const CartContainer = () =>{
    //Renderizo el componente hijo.
    return(
        <div className="cart">
            <Cart></Cart>
        </div>
    )
}