import React from 'react';
// import "../globals.css";

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <p style={{ color: "skyblue" }}>Khiba &gt;&gt; </p>
                <li><a href="#intro">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="https://mail.google.com/mail/?view=cm&fs=1&to=khibakoenane@gmail.com&su=Connect:%20&body=Hey%20Khiba." target="_blank">Connect</a></li>
            </ul>
        </nav>
    )
}

export default NavBar
