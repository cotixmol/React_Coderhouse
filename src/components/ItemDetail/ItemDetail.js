//Importo la hoja de estilos de este componente
import "./ItemDetail.css"

//Importo los componente que van a ser hijos del componente creado en esta pagina.
import { Contador } from "../ItemCount/ItemCount"

//Importo las funciones de React
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

//Import el cartContext
import { cartContext } from "../../context/cartContext";

/* Este componente toma el objeto producto del padre ItemDetailContainer (este objeto es uno de los objetos filtrados por id en el componente padre) */
export const ItemDetail = ({detalles})=>{

        /* Traigo la funcion addProduct de cartContext. El componente ItemDetail esta como hijo de cartContext, pudiendo alcanzar la función addProduct */
        const {addProduct} = useContext(cartContext);

        const [quantity,setQuantity] = useState(0)

        /* Genero una función onAdd que usa el parametro "numero" agragandolo al objeto producto (que lo traemos entero usando "Spread Operator") la función traida de cartContext. Como esta función se la vamos a pasar al componente Contador, alli dentro esta la variable "numero".
        La funcionalidad de la función addProduct se encuentra dentro de cartContext. */
        const onAdd = (numero)=>{
            addProduct(detalles,numero) 
            setQuantity(numero)
        }

        /* Este componente renderiza la estructura de los componentes de Detail. Muestra un por cada elemento una tarjeta con los atributos especificados. En la parte inferior esta el Componente Contador con props de "stockAmount" la cantidad maxima de articulos. "onAdd" la función que genera el objeto newProduct y lo usa como parametro en la funcion addProducto (que esta en cartContexts) */
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

