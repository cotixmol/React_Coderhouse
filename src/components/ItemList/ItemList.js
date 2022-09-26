//Importaciones
//Importo la hoja de estilos del componente ItemList
import "../ItemList/ItemList.css"
//Importo el componente Item, el cual sera hijo de este.
import { Item } from "../Item/Item"
//Importo las funciones de React.
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
//Importo las funciones de Firebase
import { collection, getDocs } from "firebase/firestore";
//Importo bd de firebase
import { db } from "../../utils/firebase"

export const ItemList = ()=>{

    const [elementos,setElementos] = useState([])
    const {categoria} = useParams();

    useEffect(()=>{
        const GetData = async () =>{
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
                            <Item elemento={elemento}/>
                        </div>
                    )
                })
            }
        </>
    )
}
