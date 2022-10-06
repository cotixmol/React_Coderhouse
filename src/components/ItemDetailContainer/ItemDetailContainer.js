import "./ItemDetailContainer.css"

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { ItemDetail } from "../ItemDetail/ItemDetail"

import { doc, getDoc } from "firebase/firestore";

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
