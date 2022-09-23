//Importo la hoja de estilos del Componente Cart
import "./Cart.css"
//Importo las funciones de React
import { useContext } from "react"
//Importo el cartContext.
import { cartContext } from "../../context/cartContext"
//Importo el componente del formulario
import { Form } from "../Form/Form"

//Genero este componente que uso para mostrar los elementos que estan en el carrito. Esto lo hago mediante el uso de contexto.
export const Cart = () =>{
    // Traigo "products" que es productCartList una variable declarada en el cartContext. 
    // Ademas traigo la funcion deleteProduct que en el renderizado estara asociado a un boton, que para esta función toma como parametro el id del producto que acompaña.
    // Ademas traigo la función clearAllProducts que vacia el carro. La logica esta en el cartContext.
    const {products,deleteProduct,clearAllProducts,getTotalPrice} = useContext(cartContext)

    const sendOrder = (e) =>{
        e.preventDefault();
        const order ={
            buyer:{
                name: e.target[0].value,
                phone: e.target[1].value,
                email: e.target[2].value 
            },
            items: products,
            total: getTotalPrice()
        }
        console.log(order)
    }



    //Renderizo una tarjeta con los detalles del elemento que esta en el carrito. Como cantidad, precio y foto. Ademas creo el boton al que asigno la función deleteProduct asignandole como parametro de funcion el valor id del item en cuestion.
    //En la parte inferior genero el boton con la funcion "clearAllProducts" el cual vacia el carrito. 
    return(
        <div className="contenedor_itemcart">
            <div>
                {
                    products.length>0 ?
                    <>
                        {
                            products.map(item=>(
                                <div className="elemento_itemcart">
                                    <div><img className="imagen_itemcart" alt={item.title} src={item.pictureUrl}></img></div>
                                    <p className="titulo_itemcart">{item.title}</p>
                                    <p className="cantidad_itemcart">{item.quantity}</p>
                                    <p className="precio_itemcart">{item.price}</p>
                                    <p className="total_itemcart">{item.totalPrice}</p>
                                    <button className="boton_itemcart" onClick={()=>deleteProduct(item.id)}> x </button>
                                </div>
                            ))  
                        }
                        <button onClick={clearAllProducts}>Vaciar el Carrito</button>
                        <p>Precio total: {getTotalPrice()}</p>
                        <Form sendOrder={sendOrder}></Form>
                    </>  
                    :
                        <p> Hacer el Render de no hay productos </p> 
                    }
            </div>
        </div>
    )
}