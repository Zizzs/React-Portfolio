import React from 'react';
import PropTypes from 'prop-types';


export default function ProjectDetails(props){
    const {project} = props.location.state;

    return (
        <div id="detailsDiv">
        <style jsx>{`
            #detailsDiv {
                color: white;
                margin-top: 100px;
            }

            #projectTitle {
                font-size: 25px;
                text-align: center;
            }
        `}</style>
            <div>
                <p id="projectTitle">{project.name}</p>
            </div>
            <hr></hr>
            <div>
                <p>{project.description}</p>
                <p>{project.madeBy}</p>
                <p><a href={project.github}>Github Link</a> {project.hostLink.length > 5 && <a href={project.hostLink}>Hosting Link</a> }</p>
                <p>{project.hostLink}</p>
                <p>{project.id}</p>
            </div>
        </div>
    );
}

ProjectDetails.propTypes = {
    location: PropTypes.object
};