//Importo las funciones de React
import { createContext, useState } from "react";

/* Creo el contexto de manera global, esta linea genera de este archivo .js un contexto */
export const cartContext = createContext(); 

/*  Creo la función del contexto.
    Puede verse que tiene una propiedad children la cual se usa dentro del return para que luego en App() sepa identificar donde pueden ser recogidos esos valores. */
export const CartProvider = ({children}) => {
    //Creo la variable "productCartList" y la inicio como un array vacio.
    const [productCartList, setProductCartList] = useState([])

    //Creo la función addProducto que toma como parametro un elemento que sera introducido dentro de productCartList mediante el uso de "spread operatores". Aqui el segundo elemento se agrega. Al haber generado esto, lo asignamos a una variable llamada "newList" y asignamos esta lista a productCartList, quedando como una lista de productos.
    const addProduct = (product)=>{
        const newlist = [...productCartList,product]
        setProductCartList(newlist)
    }

    //Creo la función deleteProduct que genera un array nuevo del productCartlist para poder trabajarlo (no se podria de otra forma). A partir de los elementos dentro del productCartList, genero un nuevo array no incluyendo el elemento que tenga el id especificado por el objeto. Esto mas adelante se identificara con un evento, al clickear encima de un boton. Al generar este nuevo array sin el elemento con el id determinado, paso a transformar la variable productCartlist a este nuevo array. (Quedarian todos los objetos menos el que tiene el id definido mediante el click del evento (en Cart))
    const deleteProduct= (productId)=>{
        const copyArray = [...productCartList];
        const newArray = copyArray.filter(elm=>elm.id !== productId); 
        setProductCartList(newArray)
    }

    return(
        /*  Los valores dentro del Provider podran ser alcanzados por todos los componentes "children" */
         <cartContext.Provider value={{products:productCartList, addProduct,valor:0,deleteProduct}}>  
            {children}
         </cartContext.Provider>    
    )
}