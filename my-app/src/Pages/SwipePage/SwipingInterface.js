import React, { useState, useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import './SwipePage.css'
import Popup from '../../Components/Popup'
import Card from './Card'

const db = [
    {
        name: "Green Acres",
        address: "123 Farm Road, Anytown, BC, Canada",
        rating: 4.9,
        produceType: "Potatoes",
        weight: 20,
        url:'./potatoes.png',

    },
    {
        name: "Farmland 21",
        address: "201 Farm District, BC, Canada",
        rating: 4.0,
        produceType: "Onions",
        weight: 8,
        url:'./onions.png',
    },
    {
        name: "Farmers Market",
        address: "Somewhere",
        rating: 3.6,
        produceType: "Carrots",
        weight: 12,
        url:'./carrots.png',
    },
]



function SwipingInterface() {
  
  
  {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
  const cards = db
  const [lastDirection, setLastDirection] = useState()
  const [curIndex, setCurIndex] = useState(0)
  const [swipeRight, setSwipeRight] = useState(false)
  
  useEffect(() => {
    if (lastDirection == 'right') {
      setSwipeRight(true)
    }
    else {
      setSwipeRight(false)
    }
  },[lastDirection])


  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setCurIndex(curIndex + 1)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  var cardMap = cards.map((card) =>
        <TinderCard className='swipe' key={card.name} onSwipe={(dir) => swiped(dir, card.name)} onCardLeftScreen={() => outOfFrame(card.name)}>
            <Card
                name={card.name}
                address={card.address}
                rating={card.rating}
                produceType={card.produceType}
                weight={card.weight}
                url={card.url}
            />
        </TinderCard>)
  

  return (
    <div>
      <div className='cardContainer'>
        {cardMap}
      </div>
      {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
        
      {swipeRight ? <Popup selected={true} /> : <Popup selected={false} />} 
    </div>

  )
}

export default SwipingInterface