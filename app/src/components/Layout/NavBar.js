import React from 'react';
import {Link, withRouter} from "react-router-dom";

const NavBar = (props) =>{
    return (
        <nav className="nav-wrapper blue darken-4">
            <div className="container">
                <div className="brand-logo">
                    <ul className="right">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export  default withRouter(NavBar);