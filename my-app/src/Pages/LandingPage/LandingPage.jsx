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
