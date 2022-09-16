//Importo la hoja de estilos del componente ItemList
import "../ItemList/ItemList.css"
//Importo el componente Item, el cual sera hijo de este.
import { Item } from "../Item/Item"
//Importo el array de objetos de mis productos.
import { productos } from "../Articulos"
//Importo las funciones de React.
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

//Creo el componente Item List.
export const ItemList = ()=>{
    //Creo la variable elementos, la cual sera iniciada como un array vacio.    
    const [elementos,setElementos] = useState([])
    //Creo la variable categoria la cual usa el parametro "categoria" designado en App().
    const {categoria} = useParams();

    //Creo la función GetProductos la cual a traves de una promesa cumplida devuelve el array de productos.
    const GetProductos = ()=>{
        return new Promise((resolve)=>{
            if (productos!==[]){
                resolve(productos)
            }
        })
    }

    //Este useEffect creo una función asincronica la cual ejecuta la funcion de la promesa, asignando su resultando a la variable "arr_productos". Luego, en base a si la variable categoria esta definida como Param usa el array original asignandolo a elementos o filtra los elementos segun la variable categoria, genera un array nuevo en base a esto y luego lo asigna a la variable elementos.
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
        //Al final de este useEffect ejecutamos la función y a traves de las dependencias hacemos que cada vez que cambie el parametro categorias vuelva a correr este useEffect
        Articulos();
    },[categoria])
    
    //Renderizamos condicionalmente los elementos dentro de "elementos", asignandole al componente hijo como prop cada uno de los elementos.
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
