import React, { Component, TextareaHTMLAttributes } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

// defines the type of the props, if any. could also pass in {}
interface IProps {

}

// defines the type of the state
interface LoginState {
    username: string;
    password: string;
    users: { _id: string, username: string, password: string } [];
    redirect: boolean;
}

class LoginUser extends React.Component<IProps, LoginState> {
    constructor(props: IProps) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
            username: '',
            password: '',
            users: [],
            redirect: false
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

    onChangePassword(event: React.FormEvent<HTMLInputElement>) {
        const target = event.target as HTMLInputElement;
        this.setState({
            password: target.value
        });
    }

    onSubmit(event: React.FormEvent){
        event.preventDefault();

        const dbUser = this.state.users.filter(user => user.username === this.state.username)[0];

        if (dbUser === undefined) {
            alert('Sorry that username does not exist, please try again or register a new account')
            this.setState({
                username: '',
                password: ''
            })
        } else if (dbUser.password !== this.state.password) {
            alert('Sorry that password is incorrect, please try again')
            this.setState({
                password: ''
            })
        } 
        else {
            console.log('Signed in!');
            localStorage.setItem('user', dbUser._id);
            this.setState({
                redirect: true
            })
        }

        
    }

    render(){
        return(
            <div className="container">
                { this.state.redirect ? (<Redirect push to='/'/>) : null }
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
                    <label>Password: </label>
                    <input  type="text"
                        style={{width: '50%'}}
                        required
                        className="form-control"
                        value={this.state.password}
                        onChange={this.onChangePassword}
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