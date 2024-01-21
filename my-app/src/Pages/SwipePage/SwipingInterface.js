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
    {
      name: "Sunrise Fields",
      address: "45 Sunrise Lane, Ruralville, BC, Canada",
      distance: 14.5,
      rating: 4.7,
      produceType: "Tomatoes",
      weight: 15,
      timeSincePost: 2.5,
      url: './tomatoes.jpg',
  },
  {
      name: "Organic Harvest",
      address: "789 Green Street, Organic City, BC, Canada",
      distance: 8.3,
      rating: 4.5,
      produceType: "Apples",
      weight: 10,
      timeSincePost: 4.2,
      url: './apples.jpeg',
  },
  {
      name: "Golden Meadows",
      address: "150 Farm Way, Sunnydale, BC, Canada",
      distance: 20.8,
      rating: 3.9,
      produceType: "Broccoli",
      weight: 5,
      timeSincePost: 5.8,
      url: './broccoli.jpg',
  },
  {
    name: "Harvest Haven",
    address: "33 Orchard Street, Fruitland, BC, Canada",
    distance: 12.7,
    rating: 4.8,
    produceType: "Peaches",
    weight: 18,
    timeSincePost: 1.8,
    url: './peaches.jpg',
},
{
    name: "Green Gardens",
    address: "55 Gardener's Lane, Plantville, BC, Canada",
    distance: 15.2,
    rating: 4.3,
    produceType: "Cucumbers",
    weight: 7,
    timeSincePost: 3.5,
    url: './cucumbers.jpg',
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


  const swiped = (direction, nameToDelete,address,rating,produceType,weight, timeSincePost,url) => {
    console.log('removing: ' + nameToDelete)
    setCurIndex(curIndex + 1)

    setLastDirection(direction)
    
    // Every swipe add all the information
    setName(nameToDelete)
    setAddress(address)
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
              card.distance, 
              card.address, 
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
                distance={card.distance}
                address={card.address}
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