import React from 'react';

export default function Footer(){
  return (
    <div className='mainFooter'>
      <style jsx>{`
                .mainFooter {
                    background-color: #ABB1B9;
                    color: black;
                    height: 50px;
                    position: fixed;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    text-align: center;
                }

                #linkDiv {
                    margin-top: 15px;
                }
            `}</style>
      <div id="linkDiv">
        Alex Williams | <a href='https://github.com/Zizzs'>Github Profile</a> | <a href='https://www.linkedin.com/in/alexander-edward-williams/'>LinkedIn Profile</a>
      </div>
    </div>
  );
}
