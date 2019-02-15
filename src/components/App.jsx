import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import About from './About';
import Footer from './Footer';



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

function App(){
  componentWillMount();
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/projects' component={Projects} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;