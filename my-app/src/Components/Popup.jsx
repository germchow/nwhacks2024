import React from "react";
import './Popup.css';

const Popup = (
    {
        selected, 
        name,
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
                    {name}
                    {address}
                    {rating}
                    {produceType}
                    {weight}
                    {timeSincePost}
                    {url}
                </div>
            </>
        ) : null
        }
        </>
    )
}

export default Popup;