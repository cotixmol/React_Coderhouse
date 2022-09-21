//Importo las funciones de React
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

//Importo los componente que van a ser hijos del componente creado en esta pagina.
import { ItemDetail } from "../ItemDetail/ItemDetail"
//Importo las funciones de Firebase
import { doc, getDoc } from "firebase/firestore";
//Importo bd de firebase
import { db } from "../../utils/firebase"


/* Creacion del componente ItemDetail Container */
export const ItemDetailContainer = ()=>{
    
    // Creo una variable llamada detalles y la inicio como un array vacio.
    const [detalles,setDetalles] = useState([])

    //Traigo la variable "id" declarada en los Params en App()
    const {id} = useParams()

    useEffect(()=>{
        const Detalles = async () =>{
            const query = doc(db,"articulos",id)  //Como traigo el id de direbase?
            const response = await getDoc(query)
            const data = {...response.data(),id:response.id}
            setDetalles(data)
        }
        Detalles();
    },[id])


    /* Renderizamos un mapeo de la variable detalles (que contiene los productos con determinado id (o todos)). Cada item dentro de detalles lo llamamos "producto" y tiene atributos propios. Ponemos como prop de ItemDetail el objeto del array. */
    return(
        <>
            <div key={detalles.id} className="contenedor">
                <ItemDetail detalles={detalles}/>
            </div>
        </>
    )
}
