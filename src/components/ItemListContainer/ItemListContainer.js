//Importo la jhoja de estilos de ItemListContainer
import "../ItemListContainer/ItemListContainer"
//Importo ItemList, el cual es componente hijo de ItemListContainer
import {ItemList} from "../ItemList/ItemList"
//Importo NavBarCategorias, el cual es componente hijo de ItemListContainer
import NavBarCategorias from "../NavBarCategorias/NavBarCategorias"

//Creo el componenete ItemListContainer
export const ItemListContainer = ()=>{
    //Renderizo dentro de este contenedor un NavBar que muestra Categorias, que tienen links asi esa categorias cambiando los params, pudiendo filtrarse de manera adecuada.
    //Ademas, renderizo el hijo ItemList.
    return(
        <>
            <NavBarCategorias></NavBarCategorias>
            <div className="contenedor">
                <ItemList></ItemList>
            </div>
        </>
    )
}