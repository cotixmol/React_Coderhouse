//Diseño contador
import "./ItemCount.css"

//Importar elementos de Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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

    return(
        <Container>
        <Row>
            <Col>
                <div className="contador_block">
                    <h1> Contador </h1>
                    <p> {numero} </p>
                    <span>
                        <button className="buttons" onClick={OneUp}>+</button>
                        <button className="buttons" onClick={OneDown}>-</button>
                        <button className="buttons" onClick={Reinitialize}>Reiniciar</button>
                    </span>
                </div>
            </Col>
        </Row>
      </Container>
    )
}