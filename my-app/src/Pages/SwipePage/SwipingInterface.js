import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'

const db = [
    {
        name: "Green Acres",
        address: "123 Farm Road, Anytown, BC, Canada",
        imgUrl: "",

    },
    {
        name: "Farmland 21",
        address: "201 Farm District, BC, Canada",
        imgUrl: "",
    },
    {
        name: "Farmers Market",
        address: "Somewhere",
        imgUrl: "",
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

  return (
    <div>
      <h1>Swipe Below</h1>
      <div className='cardContainer'>
        {characters.map((character) =>
          <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
            <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
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