import "./ItemDetail.css"
import { Contador } from "../ItemCount/ItemCount"
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";

export const ItemDetail = ({producto})=>{

        const {addProduct} = useContext(cartContext);

        const onAdd = (numero)=>{
            const newProduct = {...producto,quantity:numero} //El spread operator en objetos trae el objeto entero y le estamos agregando el par "quantity:numero"
            addProduct(newProduct) 
        }

        return(
        <>
            <div className="contenedor_detalle">
                <div className="detail_image"> 
                    <img className="detail_image" src={producto.pictureUrl} alt={producto.title}/>
                </div>
                <div className="detail_text">
                    <p className="titulo_detail">{producto.title}</p>
                    <p className="precio_detail">{producto.price}</p>
                    <p className="descripcion_detail">{producto.description}</p>
                    <div className="contador_detail">
                        <Contador initialNumber={0} stockAmount={5} onAdd={onAdd}></Contador> 
                    </div>
                </div>
            </div>
        </>
    )
}

