import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import About from './About';


function App(){
    return (
        <body className='mainBody'>
            <style global jsx>{`
                        .mainBody {
                            width: 100wh;
                            height: 90vh;
                            background: linear-gradient(-45deg, #3E6151, #769184, #9EAFA7, #CAD2CE);
                            background-size: 400% 400%;
                            -webkit-animation: Gradient 15s ease infinite;
                            -moz-animation: Gradient 15s ease infinite;
                            animation: Gradient 15s ease infinite;
                        }

                        @-webkit-keyframes Gradient {
                            0% {background-position: 0% 50%}
                            50% {background-position: 100% 50%}
                            100% {background-position: 0% 50%}
                        }

                        @-moz-keyframes Gradient {
                            0% {background-position: 0% 50%}
                            50% {background-position: 100% 50%}
                            100% {background-position: 0% 50%}
                        }

                        @keyframes Gradient {
                            0% {background-position: 0% 50%}
                            50% {background-position: 100% 50%}
                            100% {background-position: 0% 50%}
                        }   
                `}</style>
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/projects' component={Projects} />
                </Switch>
            </div>
        </body>
    );
}

export default App;