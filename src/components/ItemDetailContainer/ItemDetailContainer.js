import { productos } from "../Articulos"
import { useEffect, useState } from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

export const ItemDetailContainer = ()=>{
    
    const GetDetalles = ()=>{
        return new Promise((resolve)=>{
            if (productos!==[]){
                resolve(productos)
            }
        })
    }

    const [detalles,setDetalles] = useState([])
    const {id} = useParams()

    useEffect(()=>{
        const Detalles = async ()=>{
            const arr_detalles = await GetDetalles()
            if (id === undefined){
                setDetalles(arr_detalles)
            }else{
                const filt_arr_detalles = arr_detalles.filter(articulos=>articulos.id===id)
                setDetalles(filt_arr_detalles)
            }
        }
        Detalles();
    },[id])

    const unaFuncionSuperior = () => {
        console.log("La proxima lo hago con contexto")
    }

    return(
        <>
            {detalles.length>0 &&
                detalles.map((producto)=>{
                    return(
                        <div key={producto.id} className="contenedor">
                            <ItemDetail unaFuncionSuperior={unaFuncionSuperior} producto={producto}/>
                        </div>
                    )
                })
            }
        </>
    )
}
