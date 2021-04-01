import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
    render(){
        return(
            <nav className="container topnav navbar navbar-dark bg-dark navbar-expand-lg">
                <NavLink to="/" className="main_title navbar-brand">MapPin</NavLink>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="navbar-item">
                            <NavLink style={{color: 'white'}} to="/register" className="nav-link">Register</NavLink>
                        </li>
                        <li className="navbar-item">
                            <NavLink style={{color: 'white'}} to="/login" className="nav-link">Log-In</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}