import React from 'react';
import { Link } from 'react-router-dom';

function About(){
    return (
        <div className='mainAboutDiv'>
            <style jsx>{`
                .mainAboutDiv {
                    background-color: white;
                    color: black;
                }
            `}</style>
            <p>About Text</p>
        </div>
    );
}

export default About;