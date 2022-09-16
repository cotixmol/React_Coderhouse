//Importo las funciones de React
import { createContext, useState } from "react";
import { ItemDetail } from "../components/ItemDetail/ItemDetail";

/* Creo el contexto de manera global, esta linea genera de este archivo .js un contexto */
export const cartContext = createContext(); 

/*  Creo la función del contexto.
    Puede verse que tiene una propiedad children la cual se usa dentro del return para que luego en App() sepa identificar donde pueden ser recogidos esos valores. */
export const CartProvider = ({children}) => {
    //Creo la variable "productCartList" y la inicio como un array vacio.
    const [productCartList, setProductCartList] = useState([])

    //La funcion addProduct tiene un condicional para saber si un producto esta o no ya cargado.
    //En caso de que la función isInCart de positivo segun el producto que se esta queriendo agregar. Se crea una lista para la manipulacion, se busca el indice en esa lista donde se encuentra ese id. Luego usando ese index, acceso al elemento y a su propiedad cantidad, aumentandola la cantidad de veces que la variable numero tenga.
    const addProduct = (product, numero)=>{
        
        if (isInCart(product.id)){
            //Creo una lista nueva con el productCartList para manipularla en las funciones
            const newList = [...productCartList];
            
            //Buscamos el producto dentro del arreglo si es que existe.
            const productIndex = productCartList.findIndex(element=>element.id===product.id);
            
            //Con el index del producto lo buscamos dentro del productCartList (o la copia que hicimos arriba) y accedemos a su cantidad, sumandole el request nuevo de cantidad.
            newList[productIndex].quantity = newList[productIndex].quantity + numero;
            
            setProductCartList(newList)
        }else{
            const newProduct = {...product, quantity:numero}
            const newList = [...productCartList]
            newList.push(newProduct)
            setProductCartList(newList)
        }
    }

    //Creo la función deleteProduct que genera un array nuevo del productCartlist para poder trabajarlo (no se podria de otra forma). A partir de los elementos dentro del productCartList, genero un nuevo array no incluyendo el elemento que tenga el id especificado por el objeto. Esto mas adelante se identificara con un evento, al clickear encima de un boton. Al generar este nuevo array sin el elemento con el id determinado, paso a transformar la variable productCartlist a este nuevo array. (Quedarian todos los objetos menos el que tiene el id definido mediante el click del evento (en Cart))
    const deleteProduct= (productId)=>{
        const copyArray = [...productCartList];
        const newArray = copyArray.filter(elm=>elm.id !== productId); 
        setProductCartList(newArray)
    }

    //Creo la función para eliminar todos los items del carrito.
    const clearAllProducts = ()=>{
        setProductCartList([])
    }

    //Creo la función para conocer si un producto ya esta en el carrito o no. Puede hacerse con el metodo some() (analiza si existe un id). Tambien puede hacerse con un find, tambien con un findindex que devuelva -1 si no existe. Hay muchas formas.
    //Lo vamos a hacer con some validando un condicion para cada elemento retornando un true o un false.
    //Lo usamos para que cuando agreguemos otro producto revise si esta o no, si esta actualiza el elemento en el arreglo. Sino esta lo agrega.
    const isInCart = (id)=>{
        const elementExists = productCartList.some((elemento)=> elemento.id === id)
        return elementExists
    }


    return(
        /*  Los valores dentro del Provider podran ser alcanzados por todos los componentes "children" */
         <cartContext.Provider value={{products:productCartList,addProduct,valor:0,deleteProduct,clearAllProducts,isInCart}}>  
            {children}
         </cartContext.Provider>    
    )
}