import {ItemList} from "../ItemList/ItemList"

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