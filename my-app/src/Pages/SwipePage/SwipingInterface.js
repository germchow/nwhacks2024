import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'
import './SwipePage.css'

const db = [
    {
        name: "Green Acres",
        address: "123 Farm Road, Anytown, BC, Canada",
        url:'./fruit.png',

    },
    {
        name: "Farmland 21",
        address: "201 Farm District, BC, Canada",
        url:'./fruit.png',
    },
    {
        name: "Farmers Market",
        address: "Somewhere",
        url:'./fruit.png',
    },
  ]

function SwipingInterface() {
  const characters = db
  const [lastDirection, setLastDirection] = useState()
  const [curIndex, setCurIndex] = useState(0)

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
              <img className="producePicture" src="./fruit.png"></img>
              <h3>{character.name}</h3>
            </div>
          </TinderCard>
        )}
      </div>
      {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
    </div>
  )
}

export default SwipingInterface