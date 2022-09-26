import { createContext, useState } from "react";

export const cartContext = createContext(); 

export const CartProvider = ({children}) => {

    const [productCartList, setProductCartList] = useState([])
    
    const addProduct = (product, numero)=>{
        
        if (isInCart(product.id)){
            
            const newList = [...productCartList];
            const productIndex = productCartList.findIndex(element=>element.id===product.id);
            newList[productIndex].quantity = newList[productIndex].quantity + numero;
            newList[productIndex].totalPrice = "$"+newList[productIndex].quantity * parseInt((newList[productIndex].price).slice(1))
            setProductCartList(newList)

        }else{

            const newProduct = {...product, quantity:numero, totalPrice: "$"+numero * parseInt((product.price).slice(1))}
            const newList = [...productCartList]
            newList.push(newProduct)
            setProductCartList(newList)
        }
    }

    const deleteProduct= (productId)=>{
        const copyArray = [...productCartList];
        const newArray = copyArray.filter(elm=>elm.id !== productId); 
        setProductCartList(newArray)
    }

    const clearAllProducts = ()=>{
        setProductCartList([])
    }

    const isInCart = (id)=>{
        const elementExists = productCartList.some((elemento)=> elemento.id === id)
        return elementExists
    }

    const getTotalProducts = () =>{
        const totalProducts = productCartList.reduce((acc,item)=> acc + item.quantity,0)
        return totalProducts
    }

    const getTotalPrice = () =>{
        const totalPriceProducts = productCartList.reduce((acc,item)=> acc + parseInt((item.totalPrice).slice(1)),0)
        return "$"+totalPriceProducts
    }

    return(
         <cartContext.Provider value={{products:productCartList,addProduct,valor:0,deleteProduct,clearAllProducts,getTotalProducts,getTotalPrice}}>  
            {children}
         </cartContext.Provider>    
    )
}