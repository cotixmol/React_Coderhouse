import "./Item.css"
import { Contador } from "../ItemCount/ItemCount"

export const Item = ({elemento})=>{

    return(
        <>
                <div className="tarjeta">
                    <img className="foto" src={elemento.pictureUrl} alt={elemento.title}/>  
                    <p className="titulo">{elemento.title}</p>
                    <p className="descripcion">{elemento.description}</p>
                    <p className="precio">{elemento.price}</p>
                    <p><a href="!#">Mas detalles..</a></p>
                    <Contador initialNumber={0} stockAmount={5}></Contador>
                    <button className="boton"> Comprar </button>
                </div>
        </>
    )
}