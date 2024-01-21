import './Card.css'

function Card({name, distance, address, rating, produceType, weight, timeSincePost, produceUrl}) {

    return (
    <div className='card'>
        <img className="producePicture" src={produceUrl}></img>

        <img className="heppell" src="./Heppell.png"></img>

        <div className='cardDescription'>
            <div className="cardTop">
                <div className="leftsideCard">
                    <div className='cardName'>{name}</div>
                    <div className='cardWeight'>{weight} lbs bag</div>
                </div>

                <div className="rightsideCard">
                    <div>{distance} km away</div>
                    <div>{rating} / 5.0</div>
                    <div>{produceType}</div>
                </div>
            </div>
            
            <div className='timePostedCard'>Posted {timeSincePost} hours ago</div>
        </div>  
    </div> 
    )
}

export default Card