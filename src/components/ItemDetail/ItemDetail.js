//Importo la hoja de estilos de este componente
import "./ItemDetail.css"

//Importo los componente que van a ser hijos del componente creado en esta pagina.
import { Contador } from "../ItemCount/ItemCount"

//Importo las funciones de React
import { useContext } from "react";

//Import el cartContext
import { cartContext } from "../../context/cartContext";

/* Este componente toma el objeto producto del padre ItemDetailContainer (este objeto es uno de los objetos filtrados por id en el componente padre) */
export const ItemDetail = ({producto})=>{

        /* Traigo la funcion de cartContext. El componente ItemDetail esta como hijo de cartContext, pudiendo alcanzar la función addProduct */
        const {addProduct} = useContext(cartContext);

        /* Genero una función onAdd que usa el parametro "numero" agragandolo al objeto producto (que lo traemos entero usando "Spread Operator") la función traida de cartContext. Como esta función se la vamos a pasar al componente Contador, alli dentro esta la variable "numero".
        La funcionalidad de la función addProduct se encuentra dentro de cartContext. */
        const onAdd = (numero)=>{
            const newProduct = {...producto,quantity:numero} 
            addProduct(newProduct) 
        }

        /* Este componente renderiza la estructura de los componentes de Detail. Muestra un por cada elemento una tarjeta con los atributos especificados. En la parte inferior esta el Componente Contador con props de "stockAmount" la cantidad maxima de articulos. "onAdd" la función que genera el objeto newProduct y lo usa como parametro en la funcion addProducto (que esta en cartContexts) */
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
                        <Contador stockAmount={5} onAdd={onAdd}></Contador> 
                    </div>
                </div>
            </div>
        </>
    )
}

