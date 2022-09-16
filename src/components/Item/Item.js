//Importo la hoja de estilos del componente Item
import "./Item.css"
//Importo las funciones de React
import { Link } from "react-router-dom";

//Creo el componente Item, el cual representa las tarjetas donde estan los productos. Toma como propiedad "elemento", valor que proviene de ItemList (su componente padre). Este elemento son cada uno de los elementos del array de productos traidos segun el filtrado (o no) por categorias. Su creación esta en el componente padre.
export const Item = ({elemento})=>{

    //Renderizamos la estructura de la tarjeta. Creamos ademas un Link con el cual se ira a la pagina de detalles. Generando en el param el valor necesario para que ItemDetailContainer lo filtre de manera adecuada.
    return(
        <>
                <div className="tarjeta">
                    <img className="foto" src={elemento.pictureUrl} alt={elemento.title}/>  
                    <p className="titulo">{elemento.title}</p>
                    <p className="precio">{elemento.price}</p>
                    <p className="descripcion">{elemento.description}</p>
                    <Link to={`/item/${elemento.id}`}><p className="detalles">Mas detalles</p></Link>
                </div>
        </>
    )
}