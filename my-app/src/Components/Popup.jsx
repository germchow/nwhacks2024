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
        url
    
    }) => {
    return (
        <>
        { selected ? (
            <>
                <div className="outercontainerPopup">
                    <div className="matchCard" style={{transform: 'rotate(-10deg)'}}>
                        <img className="matchCardImage" src={'./profile.png'}></img>
                        <div className="matchCardDescription">
                        <p>Anisha</p>
                        </div>
                    </div>
                    <img className="matchProduceImage" src={url}></img>
                    <div className="matchCard" style={{transform: 'rotate(10deg)'}}>
                        <img className="matchCardImage" src={url}></img>
                        <div className="matchCardDescription">
                        <p>{name}'s {produceType}</p>
                        </div>
                    </div>
                    
                </div>
            </>
        ) : null
        }
        </>
    )
}

export default Popup;