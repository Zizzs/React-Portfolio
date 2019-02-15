

import React from 'react';
import { Link } from 'react-router-dom';

function Footer(){
  return (
    <div className='mainFooter'>
      <style jsx>{`
                .mainFooter {
                    background-color: white;
                    color: black;
                    height: 50px;
                    position: fixed;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                }
            `}</style>
        <div>
        <a href='https://github.com/Zizzs'>Github Profile</a> | <a href='https://www.linkedin.com/in/alexander-edward-williams/'>LinkedIn Profile</a>
        </div>
    </div>
  );
}

export default Footer;