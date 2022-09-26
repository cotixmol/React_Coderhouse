//Importaciones
//Importo la hoja de estilos de este componente
import "./ItemDetail.css"
//Importo los componente que van a ser hijos del componente creado en esta pagina.
import { Contador } from "../ItemCount/ItemCount"
//Importo las funciones de React
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
//Import el cartContext
import { cartContext } from "../../context/cartContext";

export const ItemDetail = ({detalles})=>{

        const {addProduct} = useContext(cartContext);

        const [quantity,setQuantity] = useState(0)

        const onAdd = (numero)=>{
            addProduct(detalles,numero) 
            setQuantity(numero)
        }

        return(
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
                                <button>Ir al carrito</button>
                            </Link>
                        }
                    </div>
                </div>
            </>
    )
}

