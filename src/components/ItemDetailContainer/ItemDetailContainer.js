//Importaciones
//Importo estilos
import "./ItemDetailContainer.css"
//Importo las funciones de React
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
//Importo los componente que van a ser hijos del componente creado en esta pagina.
import { ItemDetail } from "../ItemDetail/ItemDetail"
//Importo las funciones de Firebase
import { doc, getDoc } from "firebase/firestore";
//Importo bd de firebase
import { db } from "../../utils/firebase"

export const ItemDetailContainer = ()=>{
    
    const [detalles,setDetalles] = useState([])
    const {id} = useParams()

    useEffect(()=>{
        const Detalles = async () =>{
            const query = doc(db,"articulos",id) 
            const response = await getDoc(query)
            const data = {...response.data(),id:response.id}
            setDetalles(data)
        }
        Detalles();
    },[id])

    return(
        <>
            <div key={detalles.id} className="contenedor">
                <ItemDetail detalles={detalles}/>
            </div>
        </>
    )
}
