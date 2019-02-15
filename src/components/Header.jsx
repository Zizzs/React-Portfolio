import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    return (
        <div className="mainHeader">
            <style jsx>{`
                .mainHeader {
                    background-color: white;
                    color: black;
                }
            `}</style>
            <h1>Alex Williams</h1>
            <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/projects">Projects</Link>
            <hr></hr>
        </div>
    );
}

export default Header;