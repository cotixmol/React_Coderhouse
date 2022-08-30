export const Item = ({elemento})=>{

    return(
        <>
            <p>{elemento.id}</p>
            <p>{elemento.title}</p>
            <p>{elemento.description}</p>
            <p>{elemento.price}</p>
            <p>{elemento.pictureUrl}</p>
        </>
    )
}