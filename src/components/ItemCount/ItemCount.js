// Importo las hojas de estilo del Contador
import "./ItemCount.css"

//Importo los elementos a usar de React-Bootstrap en el componente Contador.
import Button from 'react-bootstrap/Button';

//Importao las funciones de React
import { useState } from "react";

//Creo el componente contador usando los props y funciones declarados el componente en ItemDetail.
export const Contador  = ({stockAmount,onAdd}) => {
    
    //Creo la variable numero, la cual sera usada para mostrar el valor del contador. Como valor inicial, se le pondra 0.
    const [numero,setNumero] = useState(0);

    //Estas dos funciones determinan la logica de suma y resta de los botones del contador. Luego se asignaran a los eventos de los botones determinados para ese fin.
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

    //En este componente renderizo componentes de bootstrap con sus propiedades especificas, creando un valor de suma, resta, y agregar a carrito. Este ultimo hace uso de la funcion onAdd(numero) por la cual ejecuta la logica del componente superior. Ademas muestra la variable numero renderizandola.
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