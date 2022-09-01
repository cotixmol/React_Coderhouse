//Diseño contador
import "./ItemCount.css"

//Importar elementos de Bootstrap
import Button from 'react-bootstrap/Button';

//Importar herramientas de React
import { useState } from "react";

//Crear elemento contador con sus funciones
export const Contador  = ({initialNumber,stockAmount}) => {
    const [numero,setNumero] = useState(initialNumber);

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
    const Reinitialize = () => {
        setNumero(initialNumber)
    }

return (
   <>
        <div className="buttons">
                <Button className="button" variant="outline-secondary" size="lg" onClick={OneUp}>
                    +
                </Button>
                <span className="number"> {numero} </span>
                <Button className="button" variant="outline-secondary" size="lg" onClick={OneDown}>
                    -
                </Button>
                <Button className="button" variant="outline-secondary" size="lg" onClick={Reinitialize}>
                    Reiniciar
                </Button>
        </div>
    </>
  );
}