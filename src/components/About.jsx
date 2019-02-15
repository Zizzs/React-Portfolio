import React from 'react';


function About(){
  return (
    <div className='mainAboutDiv'>
      <style jsx>{`
                .mainAboutDiv {
                    background-color: white;
                    color: black;
                    margin-top: 120px;
                    margin-bottom: 75px;
                }

                .gridDiv {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                }

                .mainBoxes {
                    width: 250px;
                    background-color: #013A6B;
                    max-height: 50px;
                    height: 50px;
                    text-align: right;
                    vertical-align: center;
                    margin-left: auto;
                    margin-right: auto;
                    margin-bottom: 15px;
                    font-size: 18px;
                    padding-right: 15px;
                    color: white;
                    border-radius: 5px;
                }

                .titleText {
                    font-size: 35px;
                }

                .languages {
                    background-image: -webkit-linear-gradient(30deg, #013A6B 50%, #B71437 50%);
                }

                .languages:hover {
                    background-image: -webkit-linear-gradient(30deg, #013A6B 50%, #700018 50%);
                }
                
                .libraries {
                    background-image: -webkit-linear-gradient(30deg, #013A6B 50%, #2F984F 50%);
                }

                .libraries:hover {
                    background-image: -webkit-linear-gradient(30deg, #013A6B 50%, #066523 50%);
                }

                .others {
                    background-image: -webkit-linear-gradient(30deg, #013A6B 50%, #E17410 50%);
                }

                .others:hover {
                    background-image: -webkit-linear-gradient(30deg, #013A6B 50%, #8B4300 50%);
                }

                #apis {
                    font-size: 16px;
                    padding-top: 5px;
                }

                #productManagement {
                    font-size: 11px;
                    padding-top: 10px;
                    height: 50px;
                }

                #frontEndDesign {
                    font-size: 12px;
                    padding-top: 10px;
                    height: 50px;
                }
            `}</style>
      <div>
        <p className="titleText">Languages:</p>
        <div className="gridDiv">
          <div className="mainBoxes languages"><p>JavaScript</p></div>
          <div className="mainBoxes languages"><p>C#</p></div>
          <div className="mainBoxes languages"><p>Python</p></div>
        </div>
      </div>
      <div>
        <p className="titleText">Frameworks and Libraries:</p>
        <div className="gridDiv">
          <div className="mainBoxes libraries"><p>React</p></div>
          <div className="mainBoxes libraries"><p>Angular</p></div>
          <div className="mainBoxes libraries"><p>ASP .NET</p></div>
          <div className="mainBoxes libraries"><p>Django 2</p></div>
          <div className="mainBoxes libraries"><p>Phaser</p></div>
          <div className="mainBoxes libraries"><p>jQuery</p></div>
          <div className="mainBoxes libraries"><p>Bootstrap</p></div>
        </div>
      </div>
      <div>
        <p className="titleText">Other:</p>
        <div className="gridDiv">
          <div className="mainBoxes others"><p id="frontEndDesign">Front-End Design</p></div>
          <div className="mainBoxes others"><p>Git</p></div>
          <div className="mainBoxes others"><p id="apis">RESTful APIs</p></div>
          <div className="mainBoxes others"><p>JSON</p></div>
          <div className="mainBoxes others"><p>CSS</p></div>
          <div className="mainBoxes others"><p>Unity 2D/3D</p></div>
          <div className="mainBoxes others"><p id="productManagement">Product Management</p></div>
          <div className="mainBoxes others"><p>Photography</p></div>
          <div className="mainBoxes others"><p>Excel</p></div>
          <div className="mainBoxes others"><p>Photoshop</p></div>
          <div className="mainBoxes others"><p>Illustrator</p></div>
        </div>
      </div>
    </div>
  );
}

export default About;