import React, { PureComponent } from 'react'
import SwipingInterface from './SwipingInterface'

function SwipePage() {
    return (
        <div className='swipePage'>
            <img className='arrow' src='./leftArrow.png'/>
            <SwipingInterface />
            <img className='arrow' src='./rightArrow.png'/>
        </div>

    )
}

export default SwipePage
