import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(){
  return (
    <div className='mainHeader'>
      <style jsx>{`
                .mainHeader {
                    background-color: #ABB1B9;
                    color: black;
                    height: 55px;
                    left: 0;
                    top: 0;
                    position: fixed;
                    width: 100%;
                }

                #headerDiv {
                    color: white;
                    margin-top: 15px;
                    margin-left: 15px;
                }

                .linkElement {
                    color: black;
                }

                .linkElement:visited {
                    color: black;
                }
                
            `}</style>
      <div id="headerDiv">
        <Link style={{color: 'black', fontSize: 20}} to='/'>Home</Link> | <Link style={{color: 'black', fontSize: 20}} to='/about'>About Me</Link> | <Link style={{color: 'black', fontSize: 20}} to='/projects'>Projects</Link>
      </div>
    </div>
  );
}