import "./Item.css"
import { Contador } from "../ItemCount/ItemCount"

import Button from 'react-bootstrap/Button';

export const Item = ({elemento})=>{

    return(
        <>
                <div className="tarjeta">
                    <img className="foto" src={elemento.pictureUrl} alt={elemento.title}/>  
                    <p className="titulo">{elemento.title}</p>
                    <p className="descripcion">{elemento.description}</p>
                    <p className="detalles"><a className="detalles" href="!#">Mas detalles..</a></p>
                    <p className="precio">{elemento.price}</p>
                    <Contador initialNumber={0} stockAmount={5}></Contador>
                    <div className="boton_compra"><Button variant="outline-secondary"> Comprar </Button></div>
                </div>
        </>
    )
}