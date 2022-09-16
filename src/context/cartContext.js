import { createContext, useState } from "react";

/* Creo el contexto de manera global, esta linea genera de este archivo .js un contexto */
export const cartContext = createContext(); 

/*  Creo la función del contexto.
    Puede verse que tiene una propiedad children la cual se usa dentro del return para que luego en App() sepa identificar donde pueden ser recogidos esos valores. */
export const CartProvider = ({children}) => {
    const [productCartList, setProductCartList] = useState([])

    const addProduct = (product)=>{
        const newlist = [...productCartList,product] //Modificamos la variable con esta sugarsyntax: "Spread Operator"
        setProductCartList(newlist)
    }

    const deleteProduct= (productId)=>{
        const copyArray = [...productCartList]; //El spread hace un copia para poder trabajar con el arreglo
        const newArray = copyArray.filter(elm=>elm.id !== productId); //Generamos un array nuevo
        setProductCartList(newArray)
    }

    return(
        /*  Los valores dentro del Provider podran ser alcanzados por todos los componentes "children" */
         <cartContext.Provider value={{products:productCartList, addProduct,valor:0,deleteProduct}}>  
            {children}
         </cartContext.Provider>    
    )
}