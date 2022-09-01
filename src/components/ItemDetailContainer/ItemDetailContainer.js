import { productos } from "../Articulos"
import { useEffect, useState } from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail"

export const ItemDetailContainer = ()=>{
    
    const GetDetalles = ()=>{
        return new Promise((resolve)=>{
            if (productos!==[]){
                resolve(productos)
            }
        })
    }

    const [detalle,setDetalles] = useState([])

    useEffect(()=>{
        const Detalles = async ()=>{
            const arr_detalles = await GetDetalles()
            setDetalles(arr_detalles)
        }
        Detalles();
    },[])

    return(
        <>
            {detalle.length>0 &&
                detalle.map((detalle)=>{
                    return(
                        <div className="contenedor">
                            <ItemDetail detalle={detalle}/>
                        </div>
                    )
                })
            }
        </>
    )
}
