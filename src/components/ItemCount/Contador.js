//Importaciones
// Importo las hojas de estilo del Contador
import "./Contador.css"
//Importo los elementos a usar de React-Bootstrap en el componente Contador.
import Button from 'react-bootstrap/Button';
//Importao las funciones de React
import { useState } from "react";

export const Contador  = ({stockAmount,onAdd}) => {
    
    const [numero,setNumero] = useState(0);

    const OneUp = () => {
        if (numero===stockAmount){
            setNumero(numero)
        }else{
            setNumero(numero+1)
        }
    };
    const OneDown = () => {
        if (numero===0){
            setNumero(numero)
        }else{
            setNumero(numero-1)
        }
    };

    return (
        <>
            <div className="buttons">
                <Button className="button" variant="outline-light" size="sm" onClick={OneDown}>
                    -
                </Button>
                 <span className="number">{numero}</span>
                <Button className="button" variant="outline-light" size="sm" onClick={OneUp}>
                    +
                </Button>
                <div className="boton_compra">
                    <Button onClick={()=>onAdd(numero)} variant="outline-light"> 
                        Agregar al Carrito 
                    </Button>
                </div>
            </div>
        </>
    );
}