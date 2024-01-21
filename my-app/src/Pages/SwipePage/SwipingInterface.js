import React, { useState, useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import './SwipePage.css'
import Popup from '../../Components/Popup'

const db = [
    {
        name: "Green Acres",
        address: "123 Farm Road, Anytown, BC, Canada",
        rating: 4.9,
        produceType: "potato",
        weight: 20,
        url:'./potatoes.png',

    },
    {
        name: "Farmland 21",
        address: "201 Farm District, BC, Canada",
        rating: 4.0,
        produceType: "onion",
        weight: 8,
        url:'./onions.png',
    },
    {
        name: "Farmers Market",
        address: "Somewhere",
        rating: 3.6,
        produceType: "carrot",
        weight: 12,
        url:'./carrots.png',
    },
]



function SwipingInterface() {
  
  
  {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
  const characters = db
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

//   var img1 = new Image();
//   img1.src = "../assets/carrots.jpg";
  console.log('url(\'' + characters[0].url + '\')')

  return (
    <div>
      <h1>Swipe Below</h1>
      <div className='cardContainer'>
        {characters.map((character) =>
          <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
            <div className='card'>
              <img className="producePicture" src={character.url}></img>
              <h3>{character.name}</h3>
            </div>
          </TinderCard>
        )}
      </div>
      {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
        
      {swipeRight ? <Popup selected={true}/> : <Popup selected={false}/>} 
    </div>

  )
}

export default SwipingInterface