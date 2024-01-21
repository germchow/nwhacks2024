import React, { useState, useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import './SwipePage.css'
import Popup from '../../Components/Popup'
import Card from './Card'

const db = [
    {
        name: "Green Acres",
        address: "123 Farm Road, Anytown, BC, Canada",
        distance: 18.2,
        rating: 4.9,
        produceType: "Potatoes",
        weight: 20,
        timeSincePost: 3.0,
        url:'./potatoes.png',
        
    },
    {
        name: "Farmland 21",
        address: "201 Farm District, BC, Canada",
        distance: 10.1,
        rating: 4.0,
        produceType: "Onions",
        weight: 8,
        timeSincePost: 6.0,
        url:'./onions.png',
    },
    {
        name: "Farmers Market",
        address: "Somewhere",
        distance: 26.6,
        rating: 3.6,
        produceType: "Carrots",
        weight: 12,
        timeSincePost: 1.0,
        url:'./carrots.png',
    },
]



function SwipingInterface() {
  
  
  {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
  const cards = db
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
  const [url, setUrl] = useState("")
  
  useEffect(() => {
    if (lastDirection == 'right') {
      
      console.log(name, distance, address, rating, produceType, weight, timeSincePost, url)
      setSwipeRight(true)
    }
    else {
      setSwipeRight(false)
    }
  },[lastDirection])


  const swiped = (direction, nameToDelete,address,distance,rating,produceType,weight, timeSincePost,url) => {
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
    setUrl(url)
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
              card.url
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
                url={card.url}
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
          url={url}
        /> 
        : <Popup selected={false} />} 
    </div>

  )
}

export default SwipingInterface