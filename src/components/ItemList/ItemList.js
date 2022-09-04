import "../ItemList/ItemList.css"

import { Item } from "../Item/Item"
import { productos } from "../Articulos"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const ItemList = ()=>{
    
    const GetProductos = ()=>{
        return new Promise((resolve)=>{
            if (productos!==[]){
                resolve(productos)
            }
        })
    }

    const [elementos,setElementos] = useState([])
    const {categoria} = useParams();

    useEffect(()=>{
        const Articulos = async ()=>{
            const arr_productos = await GetProductos()
            if (categoria === undefined){
                setElementos(arr_productos)
            }else{
                const filt_arr_productos = arr_productos.filter(articulos=>articulos.categoria===categoria)
                setElementos(filt_arr_productos)
            }
        }
        Articulos();
    },[categoria])
    
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
