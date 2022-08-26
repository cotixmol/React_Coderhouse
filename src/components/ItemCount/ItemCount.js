import "./ItemCount.css"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useState } from "react";


export const Contador  = ({initialNumber,stockAmount}) => {
    const [numero,setNumero] = useState(initialNumber);

    const OneUp = () => {
        if (numero===stockAmount){
        }else{
            setNumero(numero+1)
        }
    };

    const OneDown = () => {
        if (numero===0){
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
            <Col></Col>
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
            <Col></Col>
        </Row>
      </Container>
    )
}