import React from 'react';
import PropTypes from 'prop-types';
import Languages from './Languages';
import Libraries from './Libraries';
import Others from './Others';
import { v4 } from 'uuid';

export default function About(props){
  console.log(props.skills);
  return (
    <div className='mainAboutDiv'>
      <style jsx>{`
                .mainAboutDiv {
                    background-color: #293542;
                    color: black;
                    margin-top: 120px;
                    margin-bottom: 75px;
                    color: white;
                }

                .gridDiv {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                }

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

                .titleText {
                    font-size: 35px;
                }

                #apis {
                    font-size: 16px;
                    padding-top: 5px;
                }

                #productManagement {
                    font-size: 11px;
                    padding-top: 10px;
                    height: 50px;
                }

                #frontEndDesign {
                    font-size: 12px;
                    padding-top: 10px;
                    height: 50px;
                }

                #aboutMeText {
                    font-size: 15px;
                    width: 80vw;
                    text-align: center;
                    margin-left: auto;
                    margin-right: auto;
                }
            `}</style>
      <div>
        <p className="titleText">About Me:</p>
        <p id="aboutMeText">My name is Alex Williams, and I am currently studying at Epicodus for Web Development using React, Angular, and ASP .NET. Along the way, I have picked up Python and meddled with Django 2, although I am not fully proficient in them yet. I am fully dedicated towards growing my skillset and learning new things within the Web Developmnent and Programming community. All related languages, frameworks, libraries and skills are listed below.</p>
      </div>
      <div>
        <p className="titleText">Languages:</p>
        <div className="gridDiv">
        {props.skills.languages.map((skill) =>
          <Languages name={skill}
            key={v4()} />
        )}
        </div>
      </div>
      <div>
        <p className="titleText">Frameworks and Libraries:</p>
        <div className="gridDiv">
        {props.skills.libraries.map((skill) =>
          <Libraries name={skill}
            key={v4()} />
        )}
        </div>
      </div>
      <div>
        <p className="titleText">Other:</p>
        <div className="gridDiv">
        {props.skills.other.map((skill) =>
          <Others name={skill}
            key={v4()} />
        )}
        </div>
      </div>
    </div>
  );
}


About.propTypes = {
  skills: PropTypes.object
}