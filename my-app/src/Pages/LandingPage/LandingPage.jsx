import React from 'react';
import './LandingPage.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

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
            
                    <p className='blurb'>
                        The world generates approximately <strong>2.5 billion tons</strong> of food waste each year, with a significant 
                        portion discarded by farmers simply because the produce is deemed <strong>'ugly.' </strong>
                        Perfectly safe and delicious fruits and vegetables with unconventional shapes or sizes are overlooked by big 
                        retailers who prefer uniformity on their shelves. 
                        <br/>
                        <br/>
                        Our mission is to break this cycle of waste by providing a platform 
                        that connects farmers with their communities, allowing them to share fresh produce for <strong>free</strong>. 
                    </p>
                </div>
                <div className="btns">
                    <Link to="/swipepage" className="swipeBTN">Start Swiping</Link>
                </div>
            </div>
            
            <div className='rightcontainer'>
                <div >
                        <img src="./uglyProduce.gif" className="pic"/>
                    </div>
            </div>
        </div>
    );
};

export default LandingPage;
