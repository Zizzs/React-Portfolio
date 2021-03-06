import React, { useState } from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import About from './About';
import Footer from './Footer';
import Error404 from './Error404';
import ProjectDetails from './ProjectDetails';
import Admin from './Admin';

function componentWillMount() {
  for(let i in styles.body){
    document.body.style[i] = styles.body[i];
  }
}



let styles = {
  body: {
    fontFamily: 'monospace',
    fontSize: 13,
    backgroundColor: '#293542',
    overflow: 'auto'
  }
}; 

export default function App(){
  componentWillMount();
  const [skills, setSkills] = useState({
    languages: ["JavaScript", "C#", "Python"],
    libraries: ["React", "Angular", "ASP .NET", "Django 2", "Phaser", "jQuery", "Bootstrap"],
    other: ["Front End Design", "Git", "RESTful API", "JSON", "CSS", "Unity 2D/3D", "Product Management", "Photography", "Excel", "Photoshop", "Illustrator"]
  });
  const [projects, setProjects] = useState({projects: [
    {
      name: 'Angular "Reddit" Clone',
      description: 'A responsive, interactive Reddit inspired blog/forum.',
      madeBy: 'Stuart Gill, Miranda Keith and Alex Williams',
      github: 'https://github.com/Zizzs/Angular-Group-Forums',
      hostLink: 'https://angular-group-forum.firebaseapp.com/',
      posts: [],
      id: 0
    },
    {
      name: 'Angular Forum',
      description: 'A responsive Web Development forum made using Angular.',
      madeBy: 'Alex Williams',
      github: 'https://github.com/Zizzs/Angular-Forums',
      hostLink: 'https://forums-1b1e7.firebaseapp.com/',
      posts: [],
      id: 1
    },
    {
      name: 'Job Search',
      description: 'A group project using C#, .NET and Selenium focusing on creating a web crawler to collect job posting information.',
      madeBy: 'Leilani Leach, Manasa Vesala, James Cho, and Alex Williams',
      github: 'https://github.com/Zizzs/JobSearch.Solution',
      hostLink: 'None',
      posts: [],
      id: 2
    },
    {
      name: 'Flocking Simulator',
      description: 'An independant project that uses p5 vectors to simular birds flocking.',
      madeBy: 'Alex Williams',
      github: 'https://github.com/Zizzs/Flocking_Simulator',
      hostLink: 'None',
      posts: [],
      id: 3
    },
    {
      name: 'Phaser Tower Defense',
      description: 'A group project using Javascript, and the Phaser library to create a fun and interactive Tower Defense game.',
      madeBy: 'Stuart Gill, Kenny Wolfenberger, James Cho, and Alex Williams',
      github: 'https://github.com/Zizzs/phaser-tower-defense',
      hostLink: 'None',
      posts: [],
      id: 4
    },
  ]});

  function handleNewOtherSkillCreation(skill) {
    let tempObject = skills;
    let tempArray = skills.other;
    tempArray.push(skill);
    tempObject.other = tempArray;
    setSkills(tempObject);
  }

  function handleNewLibrarySkillCreation(skill) {
    let tempObject = skills;
    let tempArray = skills.libraries;
    tempArray.push(skill);
    tempObject.libraries = tempArray;
    setSkills(tempObject);
  }

  function handleNewLanguageSkillCreation(skill) {
    let tempObject = skills;
    let tempArray = skills.languages;
    tempArray.push(skill);
    tempObject.languages = tempArray;
    setSkills(tempObject);
  }

  // function handleAddingNewPostToList(newPost) {
  //   let tempProjectAll = projects;
  //   let tempProject = null;
  //   for(let project of projects.projects) {
  //     if(project.id === newPost.projectId) {
  //       tempProject = project;
  //       tempProject.posts.push(newPost);
  //       tempProjectAll.projects[project.id] = tempProject;
  //       setProjects(tempProjectAll); 
  //     }
  //   }
  // }

  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/admin' render={() => <Admin onNewLanguageSkillCreation={handleNewLanguageSkillCreation} onNewLibrarySkillCreation={handleNewLibrarySkillCreation} onNewOtherSkillCreation={handleNewOtherSkillCreation} /> } />
        <Route exact path='/about' render={() => <About skills={skills}/> } />
        <Route exact path='/projects' render={() => <Projects projects={projects} />} />
        <Route path='/projects/details/:projectId' component={ProjectDetails} />
        <Route component={Error404} />
      </Switch>
      <Footer/>
    </div>
  );
}