import React from 'react';
import Project from './Project';
import { v4 } from 'uuid';

let mainProjects = [
  {
    name: 'Angular "Reddit" Clone',
    description: 'A responsive, interactive Reddit inspired blog/forum.',
    madeBy: 'Stuart Gill, Miranda Keith and Alex Williams',
    github: 'https://github.com/Zizzs/Angular-Group-Forums',
  },
  {
    name: 'Angular Forum',
    description: 'A responsive Web Development forum made using Angular.',
    madeBy: 'Alex Williams',
    github: 'https://github.com/Zizzs/Angular-Forums',
  },
  {
    name: 'Job Search',
    description: 'A group project using C#, .NET and Selenium focusing on creating a web crawler to collect job posting information.',
    madeBy: 'Leilani Leach, Manasa Vesala, James Cho, and Alex Williams',
    github: 'https://github.com/Zizzs/JobSearch.Solution',
  },
  {
    name: 'Flocking Simulator',
    description: 'An independant project that uses p5 vectors to simular birds flocking.',
    madeBy: 'Alex Williams',
    github: 'https://github.com/Zizzs/Flocking_Simulator',
  },
  {
    name: 'Phaser Tower Defense',
    description: 'A group project using Javascript, and the Phaser library to create a fun and interactive Tower Defense game.',
    madeBy: 'Stuart Gill, Kenny Wolfenberger, James Cho, and Alex Williams',
    github: 'https://github.com/Zizzs/phaser-tower-defense',
  },
];
function Projects(){
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
        {mainProjects.map((project) =>
            <Project name={project.name}
            description={project.description}
            madeBy={project.madeBy}
            github={project.github}
            key={v4()} />
        )}
        </div>
    </div>
  );
}

export default Projects;