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
        produceUrl:'./potatoes.png',
    },
    {
        name: "Farmland 21",
        address: "201 Farm District, BC, Canada",
        distance: 10.1,
        rating: 4.0,
        produceType: "Onions",
        weight: 8,
        timeSincePost: 6.0,
        produceUrl:'./onions.png',
    },
    {
        name: "Farmers Market",
        address: "Somewhere",
        distance: 26.6,
        rating: 3.6,
        produceType: "Carrots",
        weight: 12,
        timeSincePost: 1.0,
        produceUrl:'./carrots.png',
    },
    {
      name: "Sunrise Fields",
      address: "45 Sunrise Lane, Ruralville, BC, Canada",
      distance: 14.5,
      rating: 4.7,
      produceType: "Tomatoes",
      weight: 15,
      timeSincePost: 2.5,
      produceUrl: './tomatoes.jpg',
  },
  {
      name: "Organic Harvest",
      address: "789 Green Street, Organic City, BC, Canada",
      distance: 8.3,
      rating: 4.5,
      produceType: "Apples",
      weight: 10,
      timeSincePost: 4.2,
      produceUrl: './apples.jpeg',
  },
  {
      name: "Golden Meadows",
      address: "150 Farm Way, Sunnydale, BC, Canada",
      distance: 20.8,
      rating: 3.9,
      produceType: "Broccoli",
      weight: 5,
      timeSincePost: 5.8,
      produceUrl: './broccoli.jpg',
  },
  {
    name: "Harvest Haven",
    address: "33 Orchard Street, Fruitland, BC, Canada",
    distance: 12.7,
    rating: 4.8,
    produceType: "Peaches",
    weight: 18,
    timeSincePost: 1.8,
    produceUrl: './peaches.jpg',
},
{
    name: "Green Gardens",
    address: "55 Gardener's Lane, Plantville, BC, Canada",
    distance: 15.2,
    rating: 4.3,
    produceType: "Cucumbers",
    weight: 7,
    timeSincePost: 3.5,
    produceUrl: './cucumbers.jpg',
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