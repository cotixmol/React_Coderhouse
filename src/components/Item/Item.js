import "./Item.css"
import { Link } from "react-router-dom";
import { Loader } from "../Loader/Loader";

export const Item = ({elemento, isLoading})=>{

    return(
        <>
        {
            isLoading ?
            <div className="loaderContainerItem">
                <Loader></Loader>
            </div>
            :
            <>
                <div className="tarjeta">
                    <img className="foto" src={elemento.pictureUrl} alt={elemento.title}/>  
                    <p className="titulo">{elemento.title}</p>
                    <p className="precio">{elemento.price}</p>
                    <p className="descripcion">{elemento.description}</p>
                    <Link to={`/item/${elemento.id}`}><p className="detalles">Mas detalles</p></Link>
                </div>
            </>
        }
        </>

    )
}