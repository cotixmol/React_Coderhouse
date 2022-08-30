import { Item } from "../Item/Item"
import { productos } from "../Articulos"
import { useEffect, useState } from "react"

export const ItemList = ()=>{
    
    const GetProductos = ()=>{
        return new Promise((resolve)=>{
            if (productos!==[]){
                resolve(productos)
            }
        })
    }

    useEffect(()=>{
        const Articulos = async ()=>{
            const arr_productos = await GetProductos()
            setElementos(arr_productos)
        }
        Articulos();
    },[])

    const [elementos,setElementos] = useState([])
    
    return(
        <>
            {elementos.length>0 &&
                <div>
                    <Item elemento={elementos}/>
                </div>
            }
        </>
    )
}
