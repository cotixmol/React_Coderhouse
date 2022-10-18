
import "../ItemList/ItemList.css"

import { Item } from "../Item/Item"

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { collection, getDocs } from "firebase/firestore";

import { db } from "../../utils/firebase"

export const ItemList = ()=>{

    const [isLoading,setIsLoading] = useState(false)

    const [elementos,setElementos] = useState([])
    const {categoria} = useParams();

    useEffect(()=>{
        const GetData = async () =>{
            setIsLoading(true);
            const query = collection(db,"articulos")
            const response = await getDocs(query)
            const docs = response.docs;
            const data = docs.map(doc=>{return {...doc.data(),id: doc.id}})
            if (categoria === undefined){
                setElementos(data)
            }else{
                const data_filt = data.filter(articulos=>articulos.categoria===categoria)
                setElementos(data_filt)
            }
            setIsLoading(false);
        }
        GetData();
    },[categoria])
    
    return(
        <>
            {
            elementos.length>0 &&
                elementos.map((elemento)=>{
                    return(
                        <div className="contenedor">
                            <Item elemento={elemento} isLoading={isLoading}/>
                        </div>
                    )
                })
            }
        </>
    )
}
