import React from 'react';
import PropTypes from 'prop-types';

export default function Others(props){
    return (
        <div>
           <style jsx> {`
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

                .others {
                    background-image: -webkit-linear-gradient(30deg, #013A6B 50%, #E17410 50%);
                }

                .others:hover {
                    background-image: -webkit-linear-gradient(30deg, #013A6B 50%, #8B4300 50%);
                }

                .mainText {
                    padding-top: 13px;
                }

           `}</style>
           <div className="mainBoxes others"><p className="mainText">{props.name}</p></div>
        </div>
    );
}

Others.propTypes = {
    name: PropTypes.string
}