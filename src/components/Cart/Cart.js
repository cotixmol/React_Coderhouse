//Importaciones
//Importo la hoja de estilos del Componente Cart
import "./Cart.css"
//Importo las funciones de React
import { useContext, useState } from "react"
//Importo el cartContext.
import { cartContext } from "../../context/cartContext"
//Importo el componente del formulario
import { Form } from "../Form/Form"
//Importo las herramientas de Firebase
import {addDoc, collection} from "firebase/firestore";
import { db } from "../../utils/firebase";

export const Cart = () =>{

    const {products,deleteProduct,clearAllProducts,getTotalPrice} = useContext(cartContext)
    const [orderId,setOrderId] = useState("")

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
        const orderCollection = collection(db,"orders");
        addDoc(orderCollection,order)
        .then(respuesta=>setOrderId(respuesta.id))
        console.log(orderId)
    }

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