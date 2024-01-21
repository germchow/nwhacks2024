import React, { PureComponent } from 'react'
import SwipingInterface from './SwipingInterface'

function SwipePage({cards}) {
    return (
        <div className='swipePage'>
            <img className='arrow' src='./leftArrow.png'/>
            <SwipingInterface cards={cards} />
            <img className='arrow' src='./rightArrow.png'/>
        </div>

    )
}

export default SwipePage
