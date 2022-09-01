import "../ItemList/ItemList.css"

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

    const [elementos,setElementos] = useState([])

    useEffect(()=>{
        const Articulos = async ()=>{
            const arr_productos = await GetProductos()
            setElementos(arr_productos)
        }
        Articulos();
    },[])
    
    return(
        <>
            {elementos.length>0 &&
                elementos.map((elemento)=>{
                    return(
                        <div className="contenedor">
                            <Item elemento={elemento}/>
                        </div>
                    )
                })
            }
        </>
    )
}
