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

            .projectSmallerTitle {
                text-align: center;
                font-size: 18px;
            }

            .projectDetailsGrid {
                display: grid;
                grid-template-columns: 5fr 7fr;
                text-align: center;
            }

            a {
                color: white;
            }

            a:visited {
                color: white;
            }

            a:hover {
                color: #ABB1B9;
            }
        `}</style>
            <div>
                <p id="projectTitle">{project.name}</p>
            </div>
            <hr></hr>
            <div className="projectDetailsGrid">
                <div>
                    <p className="projectSmallerTitle">Description:</p>
                </div>
                <div>
                    <p>{project.description}</p>
                </div>
            </div>
            <div className="projectDetailsGrid">
                <div>
                    <p className="projectSmallerTitle">Made By:</p>
                </div>
                <div>
                    <p>{project.madeBy}</p>
                </div>
            </div>
            <div className="projectDetailsGrid">
                <div>
                    <p className="projectSmallerTitle">Links:</p>
                </div>
                <div>
                    <p><a href={project.github}>Github Link</a> {project.hostLink.length > 5 && <a href={project.hostLink}>Hosting Link</a> }</p>
                </div>
            </div>
            <hr />
        </div>
    );
}

ProjectDetails.propTypes = {
    location: PropTypes.object
};