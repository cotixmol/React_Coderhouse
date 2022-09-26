//Importaciones
//Importo ItemList, el cual es componente hijo de ItemListContainer
import {ItemList} from "../ItemList/ItemList"
//Importo NavBarCategorias, el cual es componente hijo de ItemListContainer
import NavBarCategorias from "../NavBarCategorias/NavBarCategorias"

export const ItemListContainer = ()=>{
    return(
        <>
            <NavBarCategorias></NavBarCategorias>
            <div className="contenedor">
                <ItemList></ItemList>
            </div>
        </>
    )
}