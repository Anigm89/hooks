
const CardAdd = ({title, name, image}) => {

    return (
        <>        
        <h2> {title}</h2>
        <p>{name} </p>
        <img src={image} alt={title} />
        </>
    )
}

export default CardAdd