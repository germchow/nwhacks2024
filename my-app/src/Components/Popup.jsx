import React from "react";
import './Popup.css';

const Popup = (
    {
        selected, 
        name,
        distance,
        address,
        rating,
        produceType,
        weight,
        timeSincePost,
        produceUrl
    
    }) => {
    return (
        <>
        { selected ? (
            <>
                <div className="outercontainerPopup">
                    <div className="matchGraphic">
                    <div className="matchCard" style={{transform: 'rotate(-10deg)'}}>
                        <img className="matchCardImage" src={'./profile.png'}></img>
                        <div className="matchCardDescription">
                        <p>Anisha</p>
                        </div>
                    </div>
                    <img className="matchProduceImage" src={produceUrl}></img>
                    <div className="matchCard" style={{transform: 'rotate(10deg)'}}>
                        <img className="matchCardImage" src={produceUrl}></img>
                        <div className="matchCardDescription">
                        <p>{name}'s <b>{produceType}</b></p>
                        </div>
                    </div>
                    </div>
                    <div className="matchMessage">
                    <p>Goods Secured!</p>
                    </div>
                    
                    
                </div>
            </>
        ) : null
        }
        </>
    )
}

export default Popup;