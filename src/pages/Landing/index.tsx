import React, { useState, useEffect } from 'react';

//This is for the browser not reload the entire page when clicking the links
import {Link} from 'react-router-dom';

// CSS
import './styles.css';

// Importing the SVG images. Note that they
// become JS variables
import logoImg from '../../assets/images/logo.svg';
import landingImg from  '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import api from '../../services/api';

function Landing () {
    //Let's use states once more, but at this time starting with the value 0
    const [totalConnections, setTotalConnections] = useState(0);

    // Then, import { useEffect } from react. This is a function with two
    // parameters: 
    // 1. A function (the first)
    // 2. An array of dependencies, which will state when to call the 
    // first parameter. When this array has its values changed, it calls
    // the first argument again. If you want to execute the function only once
    // when the component is shown in screen, then keep the array empty.
    useEffect(
        () => {
            api.get('/connections').then(response => {
                    const {total} = response.data; // or const total = response.data.total;

                    setTotalConnections(total);
                }
            );
        },
        []
    );

    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy"/>
                    <h2>Your online studies platform</h2>
                </div>

                <img 
                    src={landingImg} 
                    alt="Study platform" 
                    className="hero-image" 
                />

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Study"/>
                        Study
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="Teach"/>
                        Teach
                    </Link>
                </div>

                <span className="total-connections">
                    Total of {totalConnections} connections made.
                    <img src={purpleHeartIcon} alt="Purple heart"/>
                </span>
            </div>
        </div>
    )
}

export default Landing;