import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Languages(props){
    return (
        <div>
            <style jsx>{`
                .mainBoxes {
                    width: 250px;
                    background-color: #013A6B;
                    max-height: 50px;
                    height: 50px;
                    text-align: right;
                    vertical-align: center;
                    margin-left: auto;
                    margin-right: auto;
                    margin-bottom: 15px;
                    font-size: 18px;
                    padding-right: 15px;
                    color: white;
                    border-radius: 5px;
                }
                .languages {
                    background-image: -webkit-linear-gradient(30deg, #013A6B 50%, #B71437 50%);
                }
                .languages:hover {
                    background-image: -webkit-linear-gradient(30deg, #013A6B 50%, #700018 50%);
                }
                
            `}</style>
            <div className="mainBoxes languages"><p>{props.name}</p></div>
        </div>
    );
}

Languages.propTypes = {
    name: PropTypes.string
}