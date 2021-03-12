import React, { Component, TextareaHTMLAttributes } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// defines the type of the props, if any. could also pass in {}
interface IProps {

}

// defines the type of the state
interface LoginState {
    username: string;
    users: { username: string; } [];
}

class LoginUser extends React.Component<IProps, LoginState> {
    constructor(props: IProps) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
            username: '',
            users: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/users/')
            .then(response => {
                this.setState({
                    users: response.data
                })
            })
            .catch((err) => console.log('Error' + err))
    }

    onChangeUsername(event: React.FormEvent<HTMLInputElement>) {
        const target = event.target as HTMLInputElement;
        this.setState({
            username: target.value
        });
    }

    onSubmit(event: React.FormEvent){
        event.preventDefault();

        if (this.state.users.filter(user => user.username === this.state.username).length === 0) {
            alert('Sorry that username does not exist, please try again or register a new account')
            this.setState({
                username: ""
            })
        } else
            <Link to="/" className="nav-link"></Link>

        
    }

    render(){
        return(
            <div className="container">
                <h3>Sign in to Your Account</h3>
                <form onSubmit={this.onSubmit}>
                <div className="form-group"> 
                    <label>Username: </label>
                    <input  type="text"
                        style={{width: '50%'}}
                        required
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                        />
                </div>
                <div className="form-group">
                    <input type="submit" value="Login" className="btn btn-primary" />
                </div>
                </form>
            </div>
        );      
    }
}

export default LoginUser;