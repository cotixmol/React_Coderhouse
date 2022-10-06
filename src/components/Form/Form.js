import "./Form.css"
import Button from 'react-bootstrap/Button';

export const Form = ({sendOrder}) =>{
    
    return(
        <div>
            <form onSubmit={sendOrder}>
                <p className="form_text">Completa tus datos para realizar la compra:</p>
                <div className="form_container">
                <div>
                    <input className="form_input" type="text" placeholder="Nombre y Apellido" required/><br/>
                    <input className="form_input" type="number" placeholder="Numero de Telefono" required/><br/>
                    <input className="form_input" type="mail" placeholder="Correo electronico" required/><br/>
                </div>
                <div>
                    <Button className="form_button" type="submit" variant="outline-dark"> Comprar </Button>
                </div>
                </div>
            </form>
        </div>
    )
}