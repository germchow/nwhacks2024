import React, { useState, useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import './SwipePage.css'
import Popup from '../../Components/Popup'
import Card from './Card'





function SwipingInterface({cards}) {
  
  
  {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
  const [lastDirection, setLastDirection] = useState()
  const [curIndex, setCurIndex] = useState(0)
  const [swipeRight, setSwipeRight] = useState(false)

  const [name, setName] = useState("")
  const [distance, setDistance] = useState(0)
  const [address, setAddress] = useState("")
  const [rating, setRating] = useState(0)
  const [produceType, setProduceType] = useState("")
  const [weight, setWeight] = useState(0)
  const [timeSincePost, setTimeSincePost] = useState(0)
  const [produceUrl, setProduceUrl] = useState("")
  
  useEffect(() => {
    if (lastDirection == 'right') {
      
      console.log(name, distance, address, rating, produceType, weight, timeSincePost, produceUrl)
      setSwipeRight(true)
    }
    else {
      setSwipeRight(false)
    }
  },[lastDirection])


  const swiped = (direction, nameToDelete,address,distance,rating,produceType,weight, timeSincePost,produceUrl) => {
    console.log('removing: ' + nameToDelete)
    setCurIndex(curIndex + 1)

    setLastDirection(direction)
    
    // Every swipe add all the information
    setName(nameToDelete)
    setAddress(address)
    setDistance(distance)
    setRating(rating)
    setProduceType(produceType)
    setWeight(weight)
    setTimeSincePost(timeSincePost)
    setProduceUrl(produceUrl)
  }

  const outOfFrame = (name) => {
    //console.log(name + ' left the screen!')
  }

  var cardMap = cards.map((card) =>
        <TinderCard 
          className='swipe' 
          key={card.name} 
          onSwipe={(dir) => 
            swiped(
              dir, 
              card.name, 
              card.address, 
              card.distance, 
              card.rating, 
              card.produceType, 
              card.weight, 
              card.timeSincePost, 
              card.produceUrl
            )} 
          onCardLeftScreen={() => outOfFrame(card.name)}
        >
            <Card
                name={card.name}
                address={card.address}
                distance={card.distance}
                rating={card.rating}
                produceType={card.produceType}
                weight={card.weight}
                timeSincePost={card.timeSincePost}
                produceUrl={card.produceUrl}
            />
        </TinderCard>)
  

  return (
    <div>
      <div className='cardContainer'>
        {cardMap}
      </div>
      {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
        
      {swipeRight ? 
        <Popup 
          selected={true} 
          name={name}
          address={address}
          distance={distance}
          rating={rating}
          produceType={produceType}
          weight={weight}
          timeSincePost={timeSincePost}
          produceUrl={produceUrl}
        /> 
        : <Popup selected={false} />} 
    </div>

  )
}

export default SwipingInterface