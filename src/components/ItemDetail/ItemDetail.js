import "./ItemDetail.css"
import { Contador } from "../ItemCount/ItemCount"
import Button from 'react-bootstrap/Button';

export const ItemDetail = ({producto, unaFuncionSuperior})=>{
        return(
        <>
            <div className="contenedor_detalle">
                <div> 
                    <img className="detail_image" src={producto.pictureUrl} alt={producto.title}/>
                </div>
                <div className="detail_text">
                    <p>{producto.title}</p>
                    <p>{producto.price}</p>
                    <p>{producto.description}</p>
                    <Contador initialNumber={0} stockAmount={5}></Contador>
                    <div className="boton_compra"><Button onClick={unaFuncionSuperior} variant="outline-secondary"> Comprar </Button></div>
                </div>
            </div>
        </>
    )
}

