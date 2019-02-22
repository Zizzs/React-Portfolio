import React, { useEffect } from 'react';
import Project from './Project';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

export default function Projects(props){
  let projects = Array.from(props.projects.projects);
  return (
    <div>
      <style jsx>{`
                    .projectsDiv {
                        display: grid;
                        grid-template-columns: 1fr 1fr 1fr;
                        text-align: center;
                        margin-top: 50px;
                        margin-bottom: 75px;
                        background-color: '#293542';
                    }

                    #projectsText {
                        color: white;
                        font-size: 35px;
                        margin-top: 120px;
                    }
                `}</style>
      <div>
        <p id="projectsText">Major Projects:</p>
      </div>
      <div className='projectsDiv'>
        {projects.map((project) =>
          <Project name={project.name}
            description={project.description}
            madeBy={project.madeBy}
            github={project.github}
            project={project}
            id={project.id}
            onAddingNewPostToList={props.onAddingNewPostToList}
            key={v4()} />
        )}
      </div>
    </div>
  );
}

Projects.propTypes = {
  projects: PropTypes.object,
  onAddingNewPostToList: PropTypes.func,
};