function Card({name, address, rating, produceType, weight, url}) {

    return (
    <div className='card'>
        <img className="producePicture" src={url}></img>
        <div className='cardDescription'>
        <h3>{name}</h3>
        <p>{rating} / 5.0</p>
        <p>{produceType}</p>
        <p>{weight} lbs bag</p>
        </div>  
    </div> 
    )
}

export default Card