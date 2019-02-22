import React from 'react';
import alexImage from '../assets/images/alexImage.jpg'

export default function Home(){
  return (
    <div className='mainHomeDiv'>
      <style jsx>{`
                .mainHomeDiv {
                    color: white;
                    margin-top: 120px;
                    margin-bottom: 75px;
                    height: 500px;
                    width: 100%;
                }

                #mainDivWrapper {
                    text-align: center;
                    margin-top: 225px;
                    display: grid;
                    grid-template-columns: 2fr 3fr;
                }

                #textDiv {
                    margin-top: 100px;
                }
                #alexImage {
                    height: 350px;
                }

                #descriptionText {
                    font-size: 25px;
                }

                #nameText {
                    font-size: 20px;
                }
            }
        `}</style>
      <div id="mainDivWrapper">
          <div>
              <img id="alexImage" src={alexImage}/>
          </div>
          <div id="textDiv">
            <div>
                <p id="descriptionText">"Professional Archaeologist Turned Web Developer"</p> 
            </div>
            <div>
                <p id="nameText">Alex Williams</p>
            </div>
          </div>
      </div>
    </div>
  );
}