import "./Item.css"

import { Contador } from "../ItemCount/ItemCount"

import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


export const Item = ({elemento})=>{
    return(
        <>
                <div className="tarjeta">
                    <img className="foto" src={elemento.pictureUrl} alt={elemento.title}/>  
                    <p className="titulo">{elemento.title}</p>
                    <p className="descripcion">{elemento.description}</p>
                    <Link to={`/item/${elemento.id}`}><p className="detalles">Mas detalles</p></Link>
                    <p className="precio">{elemento.price}</p>
                    <Contador initialNumber={0} stockAmount={5}></Contador>
                    <div className="boton_compra"><Button variant="outline-secondary"> Comprar </Button></div>
                </div>
        </>
    )
}