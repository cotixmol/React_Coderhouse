import "./ItemDetailContainer.css"

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { ItemDetail } from "../ItemDetail/ItemDetail"

import { doc, getDoc } from "firebase/firestore";

import { db } from "../../utils/firebase"

export const ItemDetailContainer = ()=>{
    
    const [isLoading,setIsLoading] = useState(false)
    const [detalles,setDetalles] = useState([])
    const {id} = useParams()

    useEffect(()=>{
        const Detalles = async () =>{
            setIsLoading(true)
            const query = doc(db,"articulos",id) 
            const response = await getDoc(query)
            const data = {...response.data(),id:response.id}
            setDetalles(data)
            setIsLoading(false)
        }
        Detalles();
    },[id])

    return(
        <>
            <div key={detalles.id} className="contenedor">
                <ItemDetail detalles={detalles} isLoading={isLoading}/>
            </div>
        </>
    )
}
