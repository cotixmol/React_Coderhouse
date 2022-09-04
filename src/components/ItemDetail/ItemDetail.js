

export const ItemDetail = ({producto})=>{
        return(
        <>
            <div className="contenedor">
                <div> <img src={producto.pictureUrl} alt={producto.title}></img></div>
            </div>
        </>
    )
}

