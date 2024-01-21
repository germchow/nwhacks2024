import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className='outercontainer'>
            <div className="leftcontainer">
                <div className="title">
                    <div className="help">
                            Help
                    </div>
                    <div className="reducewaste">
                            Reduce <br/>
                            Waste
                    </div>
                </div>
                <div className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus purus leo, varius in urna sodales, ultricies accumsan est. Proin euismod aliquet urna, vel sodales mauris mollis vel.
                </div>
                <div className="btns">
                    <div className="swipe">
                        Start Swiping
                    </div>
                </div>
            </div>
            
            <div className='rightcontainer'>
                <div >
                        <img src="./fruit.png" className="pic"/>
                    </div>
            </div>
        </div>
    );
};

export default LandingPage;
