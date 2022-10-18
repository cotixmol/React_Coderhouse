//Importaciones
//Importo la hoja de estilos de este componente
import "./ItemDetail.css"

import { Contador } from "../ItemCount/Contador"
import { Loader } from "../Loader/Loader";

import { useContext, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";

import { cartContext } from "../../context/cartContext";

export const ItemDetail = ({detalles, isLoading})=>{

        const {addProduct} = useContext(cartContext);

        const [quantity,setQuantity] = useState(0)

        const onAdd = (numero)=>{
            addProduct(detalles,numero) 
            setQuantity(numero)
        }

        return(
            <>
            {
                isLoading ?
                <div className="loaderContainerItem">
                    <Loader></Loader>
                </div>
                :
                <>
                <div className="contenedor_detalle">
                    <div className="detail_image"> 
                        <img className="detail_image" src={detalles.pictureUrl} alt={detalles.title}/>
                    </div>
                    <div className="detail_text">
                        <p className="titulo_detail">{detalles.title}</p>
                        <p className="precio_detail">{detalles.price}</p>
                        <p className="descripcion_detail">{detalles.description}</p>
                        <div className="contador_detail">
                            <Contador stockAmount={5} onAdd={onAdd}></Contador> 
                        </div>
                        {
                            quantity>0 &&
                            <Link to="/cart">
                                <Button variant="outline-light">Ir al carrito</Button>
                            </Link>
                        }
                    </div>
                </div>
            </>
            }
            </>





    )
}

