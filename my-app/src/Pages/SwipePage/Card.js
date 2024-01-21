function Card({name, distance, address, rating, produceType, weight, timeSincePost, url}) {

    return (
    <div className='card'>
        <img className="producePicture" src={url}></img>
        <div className='cardDescription'>
        <h3>{name}</h3>
        <p>{distance} km away</p>
        <p>{rating} / 5.0</p>
        <p>{produceType}</p>
        <p>{weight} lbs bag</p>
        <p>Posted {timeSincePost} hours ago</p>
        </div>  
    </div> 
    )
}

export default Card