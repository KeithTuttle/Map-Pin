import React, { Component, TextareaHTMLAttributes } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

// defines the type of the props, if any. could also pass in {}
interface IProps {

}

// defines the type of the state
interface RegisterState {
    username: string;
    password: string;
    redirect: boolean;
}

class RegisterUser extends React.Component<IProps, RegisterState> {
    constructor(props: IProps) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
            username: '',
            password: '',
            redirect: false,
        }
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

        const user = { 
            username: this.state.username, 
            password: this.state.password 
        }

        axios.post('http://localhost:5000/users/add', user)
            .then(result => {
                localStorage.setItem('user', result.data._id);
                this.setState({
                    redirect: true
                })
            })
            .catch(err => console.log(err));

        
    }

    render(){
        return(
            <div className="container">
                { this.state.redirect ? (<Redirect push to='/'/>) : null }
                <h3>Create Account</h3>
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
                    <input type="submit" value="Register" className="btn btn-primary" />
                </div>
                </form>
            </div>
        );      
    }
}

export default RegisterUser;