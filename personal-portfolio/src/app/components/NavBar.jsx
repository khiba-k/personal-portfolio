import React from 'react';
// import "../globals.css";

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <p style={{color:"skyblue"}}>Khiba</p>
                <li><a href="#intro">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default NavBar
