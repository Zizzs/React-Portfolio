import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    return (
        <div>
            <h1>Alex Williams</h1>
            <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/projects">Projects</Link>
        </div>
    );
}

export default Header;