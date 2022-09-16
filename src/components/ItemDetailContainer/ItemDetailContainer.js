//Importo las funciones de React
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

//Importo los componente que van a ser hijos del componente creado en esta pagina.
import { ItemDetail } from "../ItemDetail/ItemDetail"

//Aca importo el el array de objetos que son mis productos.
import { productos } from "../Articulos"


/* Creacion del componente ItemDetail Container */
export const ItemDetailContainer = ()=>{
    
    // Creo una variable llamada detalles y la inicio como un array vacio.
    const [detalles,setDetalles] = useState([])

    //Traigo la variable "id" declarada en los Params en App()
    const {id} = useParams()

    /* Creo una función que devuelve una promesa. Al resolver devuelve la lista productos. */
    const GetDetalles = ()=>{
        return new Promise((resolve)=>{
            if (productos!==[]){
                resolve(productos)
            }
        })
    }   

    /* este useEffect crea la función Detalles que corre la función de la promesa asignando a "arr_detalles" el array de productos. Luego, genera el mecanismo de filtrado con "id". Si no hay ningun valor en "id" asigna a "detalles" el array de productos. Si hay algun valor en "id", este genera un nuevo array de objetos donde el id sea igual al del producto. Esto hace que se tenga en la variable detalles un solo producto. */
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
        //Lo anterior fue solo el armado de la función, ahora cada vez que cambie "id" hacemos que esto corra.
        Detalles();
    },[id])

    /* Renderizamos un mapeo de la variable detalles (que contiene los productos con determinado id (o todos)). Cada item dentro de detalles lo llamamos "producto" y tiene atributos propios. Ponemos como prop de ItemDetail el objeto del array. */
    return(
        <>
            {detalles.length>0 &&
                detalles.map((producto)=>{
                    return(
                        <div key={producto.id} className="contenedor">
                            <ItemDetail producto={producto}/>
                        </div>
                    )
                })
            }
        </>
    )
}
