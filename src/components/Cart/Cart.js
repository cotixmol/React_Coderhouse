
import "./Cart.css"
import emptyCart from "./emptyCart.png"

import { useContext, useState } from "react"

import { cartContext } from "../../context/cartContext"

import { Form } from "../Form/Form"

import {addDoc, collection} from "firebase/firestore";
import { db } from "../../utils/firebase";
import Button from "react-bootstrap/esm/Button"

export const Cart = () =>{

    const {products,deleteProduct,clearAllProducts,getTotalPrice} = useContext(cartContext)
    const [orderId,setOrderId] = useState("")
    const [personBought,setPersonBought] = useState(false)

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
        setPersonBought(true)
        clearAllProducts();
    }

    return(
        <div className="contenedor_itemcart">
            <div>
                {
                    products.length>0 ?
                    <>
                        {
                            products.map(item=>(
                                <>
                                <div className="elemento_itemcart">
                                    <div>
                                        <img className="imagen_itemcart" alt={item.title} src={item.pictureUrl}/>
                                    </div>
                                    <p className="titulo_itemcart">{item.title}</p>
                                    <p className="cantidad_itemcart">{item.quantity}</p>
                                    <p className="precio_itemcart">{item.price}</p>
                                    <p className="total_itemcart">{item.totalPrice}</p>
                                    <button className="boton_itemcart" onClick={()=>deleteProduct(item.id)}> X </button>
                                </div>
                                </>
                            ))  
                        }
                        <div className="price_and_button">
                            <strong>Precio total: {getTotalPrice()}</strong>
                            <Button variant="outline-dark" onClick={clearAllProducts}>Vaciar el Carrito</Button>
                        </div>
                        <Form sendOrder={sendOrder}></Form>
                    </>  
                    :
                        personBought?
                        <div className="empty_cart_container">
                            <span> Su numero de orden: {orderId}</span>
                        </div>  
                        :
                        <div className="empty_cart_container">
                            <img src={emptyCart} alt="carrito vacio"/>
                            <p>El carrito de compras esta vacio</p>
                        </div>

                    }
            </div>
        </div>
    )
}