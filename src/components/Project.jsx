import React from 'react';
import PropTypes from 'prop-types';

function Project(props){
  return (
    <div>
      <div className="projectDiv">
        <style jsx>{`
                .projectDiv {
                    width: 400px;
                    height: 150px;
                    align-self: center;
                    margin-top: 25px;
                    margin-left: auto;
                    margin-right: auto;
                    background-color: white;
                    color: white;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    background-image: -webkit-linear-gradient(25deg, #013A6B 52%, #8A0C93 48%);
                    border-radius: 5px;
                }

                .projectDiv:hover {
                    background-image: -webkit-linear-gradient(25deg, #013A6B 52%, #55015B 48%);
                }

                a {
                    color: white;
                    padding: 5px;
                    background-color: black;
                    border-radius: 5px;
                }
                a:hover {
                    color: white;
                }

                a:visited {
                    color: white;
                }

                #secondGrid {
                    display: grid;
                    grid-template-rows: 2fr 1fr;
                }
            `}</style>
        <div>
            <p>{props.name}</p>
            <p>{props.madeBy}</p>
        </div>
        <div id="secondGrid">
            <div>
                <p>{props.description}</p>
            </div>
            <div>
                <p><a href={props.github}>Github Link</a></p>
            </div>
        </div>
      </div>
    </div>
  );
}

Project.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  madeBy: PropTypes.string,
  github: PropTypes.string
};

export default Project;