import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

interface IProps {

}

// defines the type of the state
interface NavState {
    username: string;
}

export default class NavBar extends React.Component<IProps, NavState> {
    constructor(props: IProps) {
        super(props);
        this.clearUsername = this.clearUsername.bind(this);
        this.state = {
            username: '',
        }
    }

    clearUsername(){
        localStorage.removeItem("user");
        this.setState({
            username: ""
        });
    }

    componentDidMount() {
        this.setState({
            username: localStorage.getItem("user")+''
        })
    }

    render(){
        return(
            <nav className="container topnav navbar navbar-dark bg-dark navbar-expand-lg">
                <NavLink to="/" className="main_title navbar-brand">MapPin</NavLink>
                <div className="collpase navbar-collapse">
                {localStorage.getItem("user") == null &&
                    <ul className="navbar-nav ml-auto">
                        <li className="navbar-item">
                            <NavLink style={{color: 'white'}} to="/register" className="nav-link">Register</NavLink>
                        </li>
                        <li className="navbar-item">
                            <NavLink style={{color: 'white'}} to="/login" className="nav-link">Log-In</NavLink>
                        </li>
                    </ul>
                }
                {localStorage.getItem("user") != null &&
                    <ul className="navbar-nav ml-auto">
                        <li className="navbar-item">
                            <NavLink style={{color: 'white'}} to="/login" className="nav-link" onClick={this.clearUsername}>Logout {this.state.username}</NavLink>
                        </li>
                    </ul>
                }
                    
                </div>
            </nav>
        );
    }
}