import React from 'react';
import PropTypes from 'prop-types';

function Project(props){
  return (
    <div>
      <div className="projectDiv">
        <style jsx>{`
                .projectDiv {
                    border: 3px solid black;
                    width: 200px;
                    height: auto;
                    align-self: center;
                    margin-top: 25px;
                    margin-left: auto;
                    margin-right: auto;
                    background-color: white;
                    color: black;
                }

                .projectDiv:hover {
                    background-color: gray;
                }
            `}</style>
        <p>{props.name}</p>
        <p>{props.description}</p>
        <p>{props.madeBy}</p>
        <p><a href={props.github}>Github</a></p>
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