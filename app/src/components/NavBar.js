import React from 'react';

const NavBar = () =>{
    return (
        <nav className="nav-wrapper blue darken-4">
            <div className="container">
                <a  className="brand-logo">
                    <ul className="right">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </a>
            </div>
        </nav>
    )
}

export  default NavBar;