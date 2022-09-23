
export const Form = ({sendOrder}) =>{
    
    return(
    <form onSubmit={sendOrder}>
        <input type="text" placeholder="Nombre y Apellido"></input><br/>
        <input type="number" placeholder="Numero de Telefono"></input><br/>
        <input type="mail" placeholder="Correo electronico"></input><br/>
        <button type="submit"> Comprar </button>
    </form>
    )
}