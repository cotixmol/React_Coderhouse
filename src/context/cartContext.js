import { createContext, useState } from "react";

export const cartContext = createContext(); 


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

    //Como valores paso el listado de productos y tambien la funcion creada.
    return(
         <cartContext.Provider value={{products:productCartList, addProduct,valor:10,deleteProduct}}>  
            {children}
         </cartContext.Provider>    
    )
}